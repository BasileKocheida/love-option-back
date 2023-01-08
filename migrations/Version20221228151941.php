<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228151941 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE interest (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE interest_profile (interest_id INT NOT NULL, profile_id INT NOT NULL, INDEX IDX_8E2DDDC15A95FF89 (interest_id), INDEX IDX_8E2DDDC1CCFA12B8 (profile_id), PRIMARY KEY(interest_id, profile_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE interest_profile ADD CONSTRAINT FK_8E2DDDC15A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE interest_profile ADD CONSTRAINT FK_8E2DDDC1CCFA12B8 FOREIGN KEY (profile_id) REFERENCES profile (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE interest_profile DROP FOREIGN KEY FK_8E2DDDC15A95FF89');
        $this->addSql('ALTER TABLE interest_profile DROP FOREIGN KEY FK_8E2DDDC1CCFA12B8');
        $this->addSql('DROP TABLE interest');
        $this->addSql('DROP TABLE interest_profile');
    }
}
