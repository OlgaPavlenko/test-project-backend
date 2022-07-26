import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1658832789045 implements MigrationInterface {
  name = 'Users1658832789045';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100), "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "phone" character varying(25), "role" "public"."users_role_enum", CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
