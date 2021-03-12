import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1615575075485 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}

// npx typeorm migration:create -n CoffeeRefactor
// npx typeorm migration:generate -n Something
// npm run build
// npx typeorm migration:run
// npx typeorm migration:revert
