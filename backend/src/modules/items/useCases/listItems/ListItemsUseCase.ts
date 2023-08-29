import { inject, injectable } from "tsyringe";

import { Item } from "@modules/items/infra/typeorm/entities/Item";
import { IItemsRepository } from "@modules/items/repositories/IItemsRepository";

@injectable()
class ListItemsUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepositories: IItemsRepository
  ) {}

  async execute(item_id: string): Promise<Item> {
    const itemById = await this.itemsRepositories.findItemById(item_id);

    return itemById;
  }
}

export { ListItemsUseCase };
