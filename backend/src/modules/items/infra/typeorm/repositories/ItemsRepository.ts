import { getRepository, Repository } from "typeorm";

import { IItemsRepository } from "@modules/items/repositories/IItemsRepository";

import { Item } from "../entities/Item";

class ItemsRepository implements IItemsRepository {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async findItemById(item_id: string): Promise<Item> {
    const item = await this.repository.findOne(item_id);

    return item;
  }

  async findAllItems(): Promise<Item[]> {
    const items = await this.repository.find();

    return items;
  }
}

export { ItemsRepository };
