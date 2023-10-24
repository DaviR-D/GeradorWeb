import { Item } from "../infra/typeorm/entities/Item";

interface IItemsRepository {
  findItemById(score_id: string): Promise<Item>;
  findAllItems(): Promise<Item[]>;
}

export { IItemsRepository };
