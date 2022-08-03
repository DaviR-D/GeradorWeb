"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStudentsToken1654566535255 = void 0;

var _typeorm = require("typeorm");

class CreateStudentsToken1654566535255 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "students_tokens",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "refresh_token",
        type: "varchar"
      }, {
        name: "student_id",
        type: "uuid"
      }, {
        name: "expires_date",
        type: "timestamp"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }],
      foreignKeys: [{
        name: "FKStudentToken",
        referencedTableName: "students",
        referencedColumnNames: ["id"],
        columnNames: ["student_id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("students_tokens");
  }

}

exports.CreateStudentsToken1654566535255 = CreateStudentsToken1654566535255;