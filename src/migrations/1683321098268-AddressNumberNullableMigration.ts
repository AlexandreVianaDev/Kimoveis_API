import { MigrationInterface, QueryRunner } from "typeorm";

export class AddressNumberNullableMigration1683321098268 implements MigrationInterface {
    name = 'AddressNumberNullableMigration1683321098268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_fbf5cffb90f6a40bd43af7ffe55"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_dec4ebd2fa2ab82db7228e08189"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_dec4ebd2fa2ab82db7228e08189" UNIQUE ("state")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_fbf5cffb90f6a40bd43af7ffe55" UNIQUE ("city")`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
