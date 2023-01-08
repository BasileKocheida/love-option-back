<?php

namespace App\Controller;

use App\Entity\Profile;
use App\Entity\User;
use App\Repository\ProfileRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class MatchController extends AbstractController
{
    private ProfileRepository $profileRepository;
    private UserRepository $userRepository;

    public function __construct(ProfileRepository $profileRepository, UserRepository $userRepository)
    {
        $this->profileRepository = $profileRepository;
        $this->userRepository = $userRepository;
    }

    #[Route(
        name: 'findMatches',
        path: '/matches/findMatches',
        methods: ['GET', 'POST'],
    )]
    public function findMatches(UserRepository $userRepository)
    {
        /** @var User $user */
        $user = $this->getUser();
        $userInterests = $user->getProfile()->getInterests()->toArray();
        $userGenderSearched = $user->getProfile()->getGenderSearched();
        $otherUserInterests = [];
        $potentialMatches = [];
        
        // retrieve all users from the database
        $allUsers = $this->userRepository->findAll();
        
        foreach ($allUsers as $otherUser) {

            if ($otherUser === $user) {
                // skip the current user
                continue;
            }

            //IF LE GENRE DE OTHERUSER === USER->GENDERSEARCHED
            
            if($otherUser->getProfile() !== null && $otherUser->getProfile()->getGenderSearched() !== null){
                $otherUserInterests = $otherUser->getProfile()->getInterests()->toArray();
                $otherUserGenderSearched = $otherUser->getProfile()->getGenderSearched();
                dump($otherUserInterests);
            }

            
            // check interests and compatible gender 
            if (count(array_intersect($userInterests, $otherUserInterests)) > 0
            && $userGenderSearched === $otherUserGenderSearched) {
                $potentialMatches[] = $otherUser;
            }
        }
        
        dd($potentialMatches);

        return $potentialMatches;
    }
}