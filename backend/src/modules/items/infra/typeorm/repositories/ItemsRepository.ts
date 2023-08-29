import { getRepository, Repository } from "typeorm";

import { IItemsRepository } from "@modules/items/repositories/IItemsRepository";

import { Item } from "../entities/Item";

class ItemsRepository implements IItemsRepository {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async findItemById(score_id: string): Promise<Item> {
    const score = await this.repository.findOne(score_id, {
      relations: ["scoreImages"],
    });

    return score;
  }

  async findItemsByActivity(activity_id: string): Promise<Item[]> {
    const scores = await this.repository.find({
      where: { activity_id },
      relations: ["scoreImages"],
    });

    return scores;
  }

  async findGroupedItems(): Promise<Item[]> {
    const scores = await this.repository
      .createQueryBuilder("score")
      .leftJoin("score.user", "user")
      .select(["user.name", "SUM(score.score) as totalItem"])
      .groupBy("user.name")
      .orderBy("totalItem", "DESC")
      .getRawMany();

    return scores;
  }
}

export { ItemsRepository };
