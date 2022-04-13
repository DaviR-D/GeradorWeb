import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
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
    await expect(
      sendForgotPasswordMailUseCase.execute("momev@nefa.vc")
    ).rejects.toEqual(new AppError("User does not exists"));
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
