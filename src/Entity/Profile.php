<?php

namespace App\Entity;

// use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\ProfileController;
use App\Repository\ProfileRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
#[ApiResource(
    collectionOperations: [
        'get',
        'post'=>[
            'path' => '/profiles',
            'method' => 'post',
            'controller' => [ProfileController::class, 'createProfile'],
            'read' => false,
            'security' => 'is_granted("ROLE_USER")',
            'denormalization_context'=> ['groups'=>['profile:write']],
        ],
        'addInterest'=> [
            'path' => '/profiles/interests',
            'method' => 'post',
            'controller' => [ProfileController::class, 'addInterest'],
            'read' => false,
            'security' => 'is_granted("ROLE_USER")',
        ],
        'addProfilePictures'=> [
            'path' => '/profiles/pictures',
            'method' => 'post',
            'controller' => [ProfileController::class, 'addProfilePictures'],
            'deserialize'=>false,
            'openapi_context' => [
                'requestBody' => [
                    'content' => [
                        'multipart/form-data' => [
                            'schema' => [
                                'type' => 'object',
                                'properties' => [
                                    'image1' => [
                                        'type' => 'string',
                                        'format' => 'binary',
                                    ],
                                    'image2' => [
                                        'type' => 'string',
                                        'format' => 'binary',
                                    ],
                                    'image3' => [
                                        'type' => 'string',
                                        'format' => 'binary',
                                    ],
                                    'image4' => [
                                        'type' => 'string',
                                        'format' => 'binary',
                                    ],
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            'controller' => [ProfileController::class, 'addProfilePictures'],
            'read' => false,
            'security' => 'is_granted("ROLE_USER")',
        ]
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
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $uuid = null;
    
    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $firstname = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $lastname = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $phone = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?int $age = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $genre = null;
    
    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $genderSearched = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private ?string $bio = null;

    #[ORM\OneToOne(inversedBy: 'profile', cascade: ['persist', 'remove'])]
    #[Groups(["profile:read", "profile:write", "matches:read"])]
    private ?User $user = null;

    #[ORM\ManyToMany(targetEntity: Interest::class, mappedBy: 'profile', fetch: "EAGER")]
    #[Groups(["user:read", "profile:read", "profile:write"])]
    private Collection $interests;

    #[ORM\OneToMany(mappedBy: 'profile', targetEntity: Image::class)]
    #[Groups(["user:read", "profile:read"])]
    private Collection $images;


    public function __construct()
    {
        $this->interests = new ArrayCollection();
        $this->uuid = Uuid::v1()->generate();
        $this->images = new ArrayCollection();

    }
    public function hydrate(array $data){
        foreach ($data as $key => $value) {
            $method = "set".ucfirst($key);
            if (method_exists($this, $method )) {
                $this->$method($value);
            }
        }
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(?string $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
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

    /**
     * @return Collection<int, Interest>
     */
    public function getInterests(): Collection
    {
        return $this->interests;
    }
    public function addInterest(Interest $interest): self

    {
        if (!$this->interests->contains($interest)) {
            $this->interests->add($interest);
            $interest->addProfile($this);
        }

        return $this;
    }

  

    public function removeInterest(Interest $interest): self
    {
        if ($this->interests->removeElement($interest)) {
            $interest->removeProfile($this);
        }

        return $this;
    }
    public function __toString()
    {
        return $this->id;
    }
    public function toArray(){
        return [
            "id"=> $this->id,
            "firstname" => $this->firstname,
            "lastname" => $this->lastname,
            "phone" => $this->phone,
            "genre" => $this->genre,
            "age" => $this->age,
            "bio"=>$this->bio,
            "interests"=>$this->interests,
        ];
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setProfile($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getProfile() === $this) {
                $image->setProfile(null);
            }
        }

        return $this;
    }

    public function getGenderSearched(): ?string
    {
        return $this->genderSearched;
    }

    public function setGenderSearched(?string $genderSearched): self
    {
        $this->genderSearched = $genderSearched;

        return $this;
    } 
}
