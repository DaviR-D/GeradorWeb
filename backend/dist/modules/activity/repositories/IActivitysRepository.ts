import { ICreateActivityDTO } from "../dtos/ICreateActivityDTO";
import { Activity } from "../infra/typeorm/entities/Activity";

interface IActivitysRepository {
  create(data: ICreateActivityDTO): Promise<Activity>;
  findAcitvityById(activity_id: string): Promise<Activity>;
  findByUser(user_id: string): Promise<Activity[]>;
}

export { IActivitysRepository };
