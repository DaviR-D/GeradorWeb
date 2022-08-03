"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateActivitys1649953318794 = void 0;

var _typeorm = require("typeorm");

class CreateActivitys1649953318794 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "activitys",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "user_id",
        type: "uuid",
        isNullable: false
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }],
      foreignKeys: [{
        name: "FKUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("activitys");
  }

}

exports.CreateActivitys1649953318794 = CreateActivitys1649953318794;