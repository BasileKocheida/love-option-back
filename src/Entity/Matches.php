<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MatchesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MatchesRepository::class)]
#[ApiResource(
    collectionOperations: [
        'get'=>[
            'path' => '/matches/findMatches',
            'method' => 'get',
            'controller' => [MatchController::class, 'findMatches'],
            'security' => 'is_granted("ROLE_USER")',
            'normalization_context'=> ['groups'=>['matches:read']],
        ],
        'post'=>[
            'path' => '/matches/findMatches',
            'method' => 'post',
            'controller' => [MatchController::class, 'findMatches'],
            'security' => 'is_granted("ROLE_USER")',
            'denormalization_context'=> ['groups'=>['matches:write']],
        ],
    ],
    itemOperations: [
        'put',
        'delete',
        'get',
        
        // recup id user
    ],
    // normalizationContext: ['groups' => 'profile:read'],
)]
class Matches
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["user:read", "profile:read", "matches:write"])]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["user:read", "profile:read", "matches:write"])]
    private ?string $label = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["user:read", "profile:read", "matches:write"])]
    private ?int $score = null;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'matches')]
    #[Groups(["user:read", "profile:read", "matches:write", "matches:read"])]
    private Collection $user;

    public function __construct()
    {
        $this->user = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(?string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(?int $score): self
    {
        $this->score = $score;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    #[Groups(["user:read", "profile:read", "profile:write", "matches:read", "matches:write"])]
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user->add($user);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->user->removeElement($user);

        return $this;
    }

    // public function __toString()
    // {
    //     return $this->id;
    // }
}
