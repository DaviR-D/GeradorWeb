"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Students1653858605335 = void 0;

var _typeorm = require("typeorm");

class Students1653858605335 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "students",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "username",
        type: "varchar",
        isUnique: true
      }, {
        name: "password",
        type: "varchar"
      }, {
        name: "teacher_id",
        type: "uuid",
        isNullable: false
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }],
      foreignKeys: [{
        name: "FKActivity",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["teacher_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("students");
  }

}

exports.Students1653858605335 = Students1653858605335;