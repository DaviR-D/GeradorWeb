import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class AddCoinsByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepositories: IUsersRepository
  ) {}

  async execute(id: string, amount: number): Promise<void> {
    await this.usersRepositories.addCoins(id, amount);
  }
}

export { AddCoinsByIdUseCase };
