import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestions1650119079547 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "alternatives",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "answer",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "score",
            type: "integer",
            isNullable: true,
          },
          {
            name: "template",
            type: "integer",
            isNullable: true,
          },
          {
            name: "activity_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKActivity",
            referencedTableName: "activitys",
            referencedColumnNames: ["id"],
            columnNames: ["activity_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
