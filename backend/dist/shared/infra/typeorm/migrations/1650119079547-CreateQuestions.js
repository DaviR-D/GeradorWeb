"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuestions1650119079547 = void 0;

var _typeorm = require("typeorm");

class CreateQuestions1650119079547 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "questions",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "description",
        type: "varchar",
        isNullable: true
      }, {
        name: "alternatives",
        type: "varchar",
        isNullable: true
      }, {
        name: "answer",
        type: "varchar",
        isNullable: true
      }, {
        name: "score",
        type: "integer",
        isNullable: true
      }, {
        name: "template",
        type: "integer",
        isNullable: true
      }, {
        name: "activity_id",
        type: "uuid",
        isNullable: false
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }],
      foreignKeys: [{
        name: "FKActivity",
        referencedTableName: "activitys",
        referencedColumnNames: ["id"],
        columnNames: ["activity_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("questions");
  }

}

exports.CreateQuestions1650119079547 = CreateQuestions1650119079547;