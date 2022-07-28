import { ICreateStudentDTO } from "../dtos/ICreateStudentDTO";
import { Student } from "../infra/typeorm/entities/Student";

interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<void>;

  findByUsername(username: string): Promise<Student>;
  /* findById(id: string): Promise<User>; */
}

export { IStudentsRepository };
