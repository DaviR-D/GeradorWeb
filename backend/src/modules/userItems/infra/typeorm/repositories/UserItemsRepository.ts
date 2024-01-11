import { getRepository, Repository } from "typeorm";

import { Item } from "@modules/items/infra/typeorm/entities/Item";
import { IBuyItemDTO } from "@modules/userItems/dtos/IBuyItemDTO";
import { UserItems } from "@modules/userItems/infra/typeorm/entities/UserItems";
import { IUserItemsRepository } from "@modules/userItems/repositories/IUserItemsRepository";

class UserItemsRepository implements IUserItemsRepository {
  private repository: Repository<UserItems>;

  constructor() {
    this.repository = getRepository(UserItems);
  }

  async buyItem({ item_id, user_id }: IBuyItemDTO): Promise<UserItems> {
    const user_item = this.repository.create({
      item_id,
      user_id,
    });

    await this.repository.save(user_item);

    return user_item;
  }

  async findItemsByUser(user_id: string): Promise<Item[]> {
    // Buscar entradas UserItems associadas ao user_id
    const userItems = await this.repository.find({
      where: { user_id },
    });

    // Extrair os item_id das entradas UserItems
    const itemIds = userItems.map((userItem) => userItem.item_id);

    // Buscar os itens correspondentes na tabela de itens
    const items = await this.itemsRepository.find({
      where: { id: itemIds },
    });

    return items;
  }
}

export { UserItemsRepository };
