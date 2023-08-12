import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  getCoins(id: string): Promise<number>;
  addCoins(id: string, amount: number): Promise<void>;
}

export { IUsersRepository };
