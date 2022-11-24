<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class UserController extends AbstractController
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    #[Route(
        name: 'getUserInfo',
        path: '/me',
        methods: ['GET'],
        defaults: [
            '_api_resource_class' => User::class,
            '_api_item_operation_name' => 'me',
        ],
    )]
    // json response
    public function __invoke(Request $request)
    {
        return $this->getUser();
    }
}
