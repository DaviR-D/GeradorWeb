import { Item } from "../infra/typeorm/entities/Item";

interface IItemsRepository {
  findItemById(score_id: string): Promise<Item>;
  findItemsByActivity(activity_id: string): Promise<Item[]>;
  findGroupedItems(): Promise<Item[]>;
}

export { IItemsRepository };
