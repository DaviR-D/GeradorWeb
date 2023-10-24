import { inject, injectable } from "tsyringe";

import { Item } from "@modules/items/infra/typeorm/entities/Item";
import { IItemsRepository } from "@modules/items/repositories/IItemsRepository";

@injectable()
class ListItemsUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepositories: IItemsRepository
  ) {}

  async execute(): Promise<Item[]> {
    const items = await this.itemsRepositories.findAllItems();

    return items;
  }
}

export { ListItemsUseCase };
