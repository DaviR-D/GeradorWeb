import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPriceToItens1690969572166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "itens",
      new TableColumn({
        name: "price",
        type: "integer",
        default: 10,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("itens", "price");
  }
}
