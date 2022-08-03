"use strict";

var _tsyringe = require("tsyringe");

require("./providers");

var _UsersRepository = require("../../modules/accounts/infra/typeorm/repositories/UsersRepository");

var _UsersTokensRepository = require("../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository");

var _ActivitysRepository = require("../../modules/activity/infra/typeorm/repositories/ActivitysRepository");

var _QuestionsRepository = require("../../modules/questions/infra/typeorm/repositories/QuestionsRepository");

var _StudentsRepository = require("../../modules/students/infra/typeorm/repositories/StudentsRepository");

var _StudentsTokensRepository = require("../../modules/students/infra/typeorm/repositories/StudentsTokensRepository");

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton("UsersTokensRepository", _UsersTokensRepository.UsersTokensRepository);

_tsyringe.container.registerSingleton("ActivitysRepository", _ActivitysRepository.ActivitysRepository);

_tsyringe.container.registerSingleton("QuestionsRepository", _QuestionsRepository.QuestionsRepository);

_tsyringe.container.registerSingleton("StudentsRepository", _StudentsRepository.StudentsRepository);

_tsyringe.container.registerSingleton("StudentsTokensRepository", _StudentsTokensRepository.StudentsTokensRepository);