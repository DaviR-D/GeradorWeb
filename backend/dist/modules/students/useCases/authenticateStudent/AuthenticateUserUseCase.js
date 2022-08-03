"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateStudentUseCase = void 0;

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _IStudentsRepository = require("../../repositories/IStudentsRepository");

var _IUsersTokensRepository = require("../../repositories/IUsersTokensRepository");

var _IDateProvider = require("../../../../shared/container/providers/DateProvider/IDateProvider");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AuthenticateStudentUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("StudentsRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("StudentsTokensRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("DayjsDateProvider")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IStudentsRepository.IStudentsRepository === "undefined" ? Object : _IStudentsRepository.IStudentsRepository, typeof _IUsersTokensRepository.IStudentsTokensRepository === "undefined" ? Object : _IUsersTokensRepository.IStudentsTokensRepository, typeof _IDateProvider.IDateProvider === "undefined" ? Object : _IDateProvider.IDateProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class AuthenticateStudentUseCase {
  constructor(studentsRepository, studentsTokensRepository, dateProvider) {
    this.studentsRepository = studentsRepository;
    this.studentsTokensRepository = studentsTokensRepository;
    this.dateProvider = dateProvider;
  }

  async execute({
    username,
    password
  }) {
    const student = await this.studentsRepository.findByUsername(username);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days
    } = _auth.default;

    if (!student) {
      throw new _AppError.AppError("Username or password incorrect");
    }

    const passwordMatch = await (0, _bcryptjs.compare)(password, student.password);

    if (!passwordMatch) {
      throw new _AppError.AppError("Username or password incorrect");
    }

    const token = (0, _jsonwebtoken.sign)({}, secret_token, {
      subject: student.id,
      expiresIn: expires_in_token
    });
    const refresh_token = (0, _jsonwebtoken.sign)({
      username
    }, secret_refresh_token, {
      subject: student.id,
      expiresIn: expires_in_refresh_token
    });
    const refresh_token_expires_date = this.dateProvider.addDays(expires_refresh_token_days);
    await this.studentsTokensRepository.create({
      student_id: student.id,
      refresh_token,
      expires_date: refresh_token_expires_date
    });
    const tokenReturn = {
      token,
      student: {
        username: student.username
      },
      refresh_token
    };
    return tokenReturn;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.AuthenticateStudentUseCase = AuthenticateStudentUseCase;