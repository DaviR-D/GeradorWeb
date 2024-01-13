import { inject, injectable } from "tsyringe";

import { IBuyItemDTO } from "@modules/userItems/dtos/IBuyItemDTO";
import { IUserItemsRepository } from "@modules/userItems/repositories/IUserItemsRepository";

@injectable()
class BuyItemUseCase {
  constructor(
    @inject("UserItemsRepository")
    private userItemsRepositories: IUserItemsRepository
  ) {}

  async execute(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { item_id, user_id }: IBuyItemDTO | any // Bug INESPLICAVEL
  ): Promise<void> {
    await this.userItemsRepositories.buyItem({
      item_id,
      user_id,
    });
  }
}

export { BuyItemUseCase };
