<?php

namespace App\Trait;


use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

trait FileUpload{

    public function uploadFiles(UploadedFile $file, string $target_directory , SluggerInterface $slugger) : string
    {

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = $slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        // Move the file to the target_directory see config/service.yaml
        try {
            $file->move(
                $this->getParameter($target_directory),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception("Error Processing UploadFile", 500);
        }
        return $newFilename;
    }
}