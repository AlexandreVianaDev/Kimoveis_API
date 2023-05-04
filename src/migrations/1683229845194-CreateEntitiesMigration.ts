import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntitiesMigration1683229845194 implements MigrationInterface {
    name = 'CreateEntitiesMigration1683229845194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, "userId" integer, "realEstateId" integer, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "realEstates" ("id" SERIAL NOT NULL, "sold" boolean DEFAULT false, "value" numeric(12,2) NOT NULL DEFAULT '0', "size" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "categoryId" integer, "addressId" integer, CONSTRAINT "REL_c7a1c763ff260ac28674afa8c6" UNIQUE ("addressId"), CONSTRAINT "PK_57badbed001c9b97de867eaa976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(7) NOT NULL, "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "UQ_977ab4e1bbd4f92802a98a9c444" UNIQUE ("number"), CONSTRAINT "UQ_fbf5cffb90f6a40bd43af7ffe55" UNIQUE ("city"), CONSTRAINT "UQ_dec4ebd2fa2ab82db7228e08189" UNIQUE ("state"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ac3131bb922483053abebc5e9ff" FOREIGN KEY ("realEstateId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ac3131bb922483053abebc5e9ff"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "realEstates"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
