import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterScoresID1681373721446 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "scores",
      new TableColumn({
        name: "new_id",
        type: "uuid",
        isNullable: false,
      })
    );

    await queryRunner.dropPrimaryKey("scores");
    await queryRunner.dropColumn("scores", "id");
    await queryRunner.changeColumn(
      "scores",
      "new_id",
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "scores",
      "id",
      new TableColumn({
        name: "id",
        type: "integer",
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      })
    );

    await queryRunner.dropColumn("scores", "new_id");
  }
}
