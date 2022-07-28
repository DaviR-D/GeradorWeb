import { Question } from "../infra/typeorm/entities/Question";
import QuestionImagesView from "./QuestionImagesView";

export default {
  render(question: Question) {
    return {
      id: question.id,
      name: question.name,
      description: question.description,
      alternatives: question.alternatives,
      answer: question.answer,
      score: question.score,
      template: question.template,
      activity: question.activity_id,
      questionImages: QuestionImagesView.renderMany(question.questionImages),
    };
  },

  renderMany(questions: Question[]) {
    return questions.map((question) => this.render(question));
  },
};
