import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddMoedasToUsers1690968822514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "coins",
        type: "integer",
        default: 0,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "moedas");
  }
}
