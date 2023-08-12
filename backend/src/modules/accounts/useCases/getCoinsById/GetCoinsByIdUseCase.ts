import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class GetCoinsByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepositories: IUsersRepository
  ) {}

  async execute(id: string): Promise<number> {
    const coins = await this.usersRepositories.getCoins(id);

    return coins;
  }
}

export { GetCoinsByIdUseCase };
