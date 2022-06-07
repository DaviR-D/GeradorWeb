interface ICreateStudentTokenDTO {
  student_id: string;
  expires_date: Date;
  refresh_token: string;
}

export { ICreateStudentTokenDTO };
