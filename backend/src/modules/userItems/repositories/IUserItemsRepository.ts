import { Item } from "@modules/items/infra/typeorm/entities/Item";
import { UserItems } from "@modules/userItems/infra/typeorm/entities/UserItems";

import { IBuyItemDTO } from "../dtos/IBuyItemDTO";

interface IUserItemsRepository {
  buyItem(data: IBuyItemDTO): Promise<UserItems>;
  findItemsByUser(user_id: string): Promise<Item[]>;
}

export { IUserItemsRepository };
