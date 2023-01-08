<?php

namespace App\Controller;

use App\Entity\Image;
use App\Entity\User;
use App\Entity\Profile;
use App\Repository\ImageRepository;
use App\Repository\InterestRepository;
use App\Repository\ProfileRepository;
use App\Repository\UserRepository;
use App\Security\PasswordHasher;
use App\Trait\FileUpload;
use DateTime;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\String\Slugger\SluggerInterface;

#[AsController]
class ProfileController extends AbstractController
{
    use FileUpload;

    private ProfileRepository $profileRepository;

    public function __construct(ProfileRepository $profileRepository)
    {
        $this->profileRepository = $profileRepository;
    }


    #[Route(
        name: 'createProfile',
        path: '/profiles',
        methods: ['POST'],
    )]
    public function createProfile(Request $request)
    { 
        /** @var User $user */
        $user = $this->getUser();
        $inputs = $request->toArray();


        if ($user->getProfile()){ // profile exist > update 
            $user->getProfile()->hydrate($inputs);
            return new JsonResponse(['profile' => $user->getProfile()->toArray(), 'message'=> 'Le profile existe déja !'], 201);
        }
        // profile not exist > create 
        $inputs['user'] = $user;
        $profile = new Profile();
        $profile->hydrate($inputs);
        $this->profileRepository->save($profile, true);
        return $profile;
    }

    #[Route(
        name: 'addInterest',
        path: '/profiles/interests',
        methods: ['POST'],
    )]
    public function addInterest(Request $request, InterestRepository $interestRepository)
    { 
        /** @var User $user */
        $user = $this->getUser();
        $inputs = $request->toArray();
        $interests = $interestRepository->findBy(['id' => $inputs['interest']]);

        foreach ($interests as $interest) {
            $user->getProfile()->addInterest($interest);
        }
        return $user->getProfile();
       
    }

    
    #[Route(
        name: 'addProfilePictures',
        path: '/profiles/pictures',
        methods: ['POST'],
    )]
    public function addProfilePictures(Request $request, ImageRepository $imageRepository, SluggerInterface $slugger)
    { 
        /** @var User $user */
        $user = $this->getUser();

        foreach ($request->files as $file) {
            $image = new Image();
            $image->setSize($file->getSize());
            $image->setExtension($file->guessExtension());
            $image->setPath($this->getParameter('profile_directory'));
            $image->setMime($file->getClientMimeType());
            $filename = $this->uploadFiles($file, 'profile_directory', $slugger);
            $image->setUrl($request->server->get('SYMFONY_PROJECT_DEFAULT_ROUTE_URL').'uploads/profile/'.$filename);
            $image->setName($filename);
            $image->setCreatedAt(new DateTimeImmutable());
            $image->setUpdatedAt(new DateTimeImmutable());
            //persist flush 
            $imageRepository->save($image, true);
            $user->getProfile()->addImage($image);
        }
        return $user->getProfile();
    }
}
