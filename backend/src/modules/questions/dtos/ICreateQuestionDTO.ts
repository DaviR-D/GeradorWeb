interface ICreateQuestionDTO {
  name: string;
  description: string;
  alternatives: string;
  answer: string;
  template: number;
  activity_id: string;
}

export { ICreateQuestionDTO };
