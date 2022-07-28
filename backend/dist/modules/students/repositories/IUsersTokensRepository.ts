import { ICreateStudentTokenDTO } from "../dtos/ICreateStudentTokenDTO";
import { StudentTokens } from "../infra/typeorm/entities/StudentTokens";

interface IStudentsTokensRepository {
  create({
    expires_date,
    refresh_token,
    student_id,
  }: ICreateStudentTokenDTO): Promise<StudentTokens>;

  findByStudentIdAndRefreshToken(
    student_id: string,
    refresh_token: string
  ): Promise<StudentTokens>;

  deleteById(id: string): Promise<void>;

  findByRefreshToken(refresh_token: string): Promise<StudentTokens>;
}

export { IStudentsTokensRepository };
