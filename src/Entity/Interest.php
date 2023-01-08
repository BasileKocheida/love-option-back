<?php

namespace App\Entity;

// use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InterestRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InterestRepository::class)]
#[ApiResource(

    collectionOperations: [
        'get'=>[
            'normalization_context'=> ['groups'=>['read:interests:collection']]
        ],
        'post'=>[
            'denormalization_context'=> ['groups'=>['interest:write']]
        ],
    ],
    itemOperations: [
        'put',
        'delete',
        'get',
    ],

    normalizationContext: ['groups' => 'interest:read'],
)]
class Interest
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['user:read', 'interest:read',"profile:read",  'profile:write', 'read:interests:collection'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:read', 'interest:read',"profile:read",  'profile:write', 'read:interests:collection'])]
    private ?string $label = null;

    #[ORM\ManyToMany(targetEntity: Profile::class, inversedBy: 'interests')]
    #[Groups(['interest:read', 'read:interests:collection'])]
    private Collection $profile;

    public function __construct()
    {
        $this->profile = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @return Collection<int, Profile>
     */
    public function getProfile(): Collection
    {
        return $this->profile;
    }

    public function addProfile(Profile $profile): self
    {
        if (!$this->profile->contains($profile)) {
            $this->profile->add($profile);
        }

        return $this;
    }

    public function removeProfile(Profile $profile): self
    {
        $this->profile->removeElement($profile);

        return $this;
    }

    public function __toString()
    {
        return $this->id;
    }
}
