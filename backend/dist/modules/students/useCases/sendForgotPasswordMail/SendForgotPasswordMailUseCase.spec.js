"use strict";

var _UsersRepositoryInMemory = require("../../../accounts/repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensRepositoryInMemory = require("../../../accounts/repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");

var _MailProviderInMemory = require("../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let dateProvider;
let usersTokensRepositoryInMemory;
let mailProvider;
describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    mailProvider = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider, mailProvider);
  });
  /*
  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");
     await usersRepositoryInMemory.create({
      email: "us@sidhurgik.vi",
      name: "Emily Ortega",
      password: "1234",
    });
     await sendForgotPasswordMailUseCase.execute("us@sidhurgik.vi");
     expect(sendMail).toHaveBeenCalled();
  }); */

  it("should not be able to send an email if user does not exists", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("momev@nefa.vc")).rejects.toEqual(new _AppError.AppError("User does not exists"));
  });
  /*
  it("should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");
     usersRepositoryInMemory.create({
      email: "it@leemofif.kw",
      name: "Bessie Cruz",
      password: "1234",
    });
     await sendForgotPasswordMailUseCase.execute("it@leemofif.kw");
     expect(generateTokenMail).toBeCalled();
  }); */
});