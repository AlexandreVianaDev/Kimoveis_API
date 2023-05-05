import { MigrationInterface, QueryRunner } from "typeorm";

export class AddressesNumberCanBeUndefinedAndNullMigration1683318782284 implements MigrationInterface {
    name = 'AddressesNumberCanBeUndefinedAndNullMigration1683318782284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_977ab4e1bbd4f92802a98a9c444"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_977ab4e1bbd4f92802a98a9c444" UNIQUE ("number")`);
    }

}
