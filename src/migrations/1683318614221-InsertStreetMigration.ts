import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertStreetMigration1683318614221 implements MigrationInterface {
    name = 'InsertStreetMigration1683318614221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "street" character varying(45) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "street"`);
    }

}
