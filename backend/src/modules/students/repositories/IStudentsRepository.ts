import { ICreateStudentDTO } from "../dtos/ICreateStudentDTO";

interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<void>;

  /*  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>; */
}

export { IStudentsRepository };
