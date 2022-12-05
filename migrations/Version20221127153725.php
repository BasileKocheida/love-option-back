<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221127153725 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE genders (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(200) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE interests (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE profile_photos (id INT AUTO_INCREMENT NOT NULL, profile_id INT NOT NULL, path VARCHAR(255) DEFAULT NULL, INDEX IDX_605C87BECCFA12B8 (profile_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE profiles (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, gender_id INT NOT NULL, age INT NOT NULL, phone INT NOT NULL, UNIQUE INDEX UNIQ_8B308530A76ED395 (user_id), UNIQUE INDEX UNIQ_8B308530708A0E0 (gender_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE profiles_interests (profiles_id INT NOT NULL, interests_id INT NOT NULL, INDEX IDX_CEC58EBA22077C89 (profiles_id), INDEX IDX_CEC58EBA734F135E (interests_id), PRIMARY KEY(profiles_id, interests_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE profile_photos ADD CONSTRAINT FK_605C87BECCFA12B8 FOREIGN KEY (profile_id) REFERENCES profiles (id)');
        $this->addSql('ALTER TABLE profiles ADD CONSTRAINT FK_8B308530A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE profiles ADD CONSTRAINT FK_8B308530708A0E0 FOREIGN KEY (gender_id) REFERENCES genders (id)');
        $this->addSql('ALTER TABLE profiles_interests ADD CONSTRAINT FK_CEC58EBA22077C89 FOREIGN KEY (profiles_id) REFERENCES profiles (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE profiles_interests ADD CONSTRAINT FK_CEC58EBA734F135E FOREIGN KEY (interests_id) REFERENCES interests (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profile_photos DROP FOREIGN KEY FK_605C87BECCFA12B8');
        $this->addSql('ALTER TABLE profiles DROP FOREIGN KEY FK_8B308530A76ED395');
        $this->addSql('ALTER TABLE profiles DROP FOREIGN KEY FK_8B308530708A0E0');
        $this->addSql('ALTER TABLE profiles_interests DROP FOREIGN KEY FK_CEC58EBA22077C89');
        $this->addSql('ALTER TABLE profiles_interests DROP FOREIGN KEY FK_CEC58EBA734F135E');
        $this->addSql('DROP TABLE genders');
        $this->addSql('DROP TABLE interests');
        $this->addSql('DROP TABLE profile_photos');
        $this->addSql('DROP TABLE profiles');
        $this->addSql('DROP TABLE profiles_interests');
    }
}
