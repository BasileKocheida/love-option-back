<?php

namespace App\Entity;

// use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProfileRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
#[ApiResource(
    collectionOperations: [
        'get',
        'post'=>[
            'denormalization_context'=> ['groups'=>['profile:write']],
        ],
    ],
    itemOperations: [
        'put',
        'delete',
        'get',
        // recup id user
    ],
    normalizationContext: ['groups' => 'profile:read'],
    // denormalizationContext: ['groups' => 'profile:write']
)]
class Profile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["profile:read", "profile:write"])]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["profile:read", "profile:write"])]
    private ?string $firstname = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(["profile:read", "profile:write"])]
    private ?string $lastname = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["profile:read", "profile:write"])]
    private ?string $phone = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["profile:read", "profile:write"])]
    private ?int $age = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["profile:read", "profile:write"])]
    private ?string $genre = null;

    #[ORM\OneToOne(inversedBy: 'user', cascade: ['persist', 'remove'])]
    #[Groups(["profile:read", "profile:write"])]
    private ?User $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["profile:read", "profile:write"])]
    private ?string $bio = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(?int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(?string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;

        return $this;
    }
}
