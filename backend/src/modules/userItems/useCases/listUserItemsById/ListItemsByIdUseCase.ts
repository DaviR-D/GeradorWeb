import { inject, injectable } from "tsyringe";

import { Item } from "@modules/items/infra/typeorm/entities/Item";
import { UserItems } from "@modules/userItems/infra/typeorm/entities/UserItems";
import { IUserItemsRepository } from "@modules/userItems/repositories/IUserItemsRepository";

@injectable()
class ListItemsByIdUseCase {
  constructor(
    @inject("UserItemsRepository")
    private userItemsRepositories: IUserItemsRepository
  ) {}

  async execute(user_id: string): Promise<Item[]> {
    const userItemById = await this.userItemsRepositories.findItemsByUser(
      user_id
    );

    return userItemById;
  }
}

export { ListItemsByIdUseCase };
