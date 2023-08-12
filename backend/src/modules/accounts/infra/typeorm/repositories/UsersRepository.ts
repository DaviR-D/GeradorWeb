import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    avatar,
    id,
    isTeacher,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      avatar,
      id,
      isTeacher,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async getCoins(id: string): Promise<number> {
    const coins = await this.repository
      .createQueryBuilder("user")
      .select("user.coins")
      .where("user.id = :id", { id })
      .getRawOne();
    return coins;
  }

  async addCoins(id: string, amount: number): Promise<void> {
    this.repository
      .createQueryBuilder()
      .update(User)
      .set({ coins: () => `coins + ${amount}` })
      .where("id = :id", { id })
      .execute();
  }
}

export { UsersRepository };
