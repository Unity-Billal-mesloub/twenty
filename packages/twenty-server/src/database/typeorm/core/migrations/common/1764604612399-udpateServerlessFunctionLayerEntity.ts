import { type MigrationInterface, type QueryRunner } from 'typeorm';

export class UdpateServerlessFunctionLayerEntity1764604612399
  implements MigrationInterface
{
  name = 'UdpateServerlessFunctionLayerEntity1764604612399';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."serverlessFunctionLayer" ALTER COLUMN "yarnLock" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."serverlessFunctionLayer" ALTER COLUMN "yarnLock" SET NOT NULL`,
    );
  }
}
