"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddQuestionImage1650291624924 = void 0;

var _typeorm = require("typeorm");

class AddQuestionImage1650291624924 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "questionImages",
      columns: [{
        name: "id",
        type: "integer",
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: "path",
        type: "varchar"
      }, {
        name: "question_id",
        type: "uuid",
        isNullable: false
      }],
      foreignKeys: [{
        name: "FKQuestions",
        referencedTableName: "questions",
        referencedColumnNames: ["id"],
        columnNames: ["question_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("questionImages");
  }

}

exports.AddQuestionImage1650291624924 = AddQuestionImage1650291624924;