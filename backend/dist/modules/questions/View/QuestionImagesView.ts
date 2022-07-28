import { QuestionImage } from "../infra/typeorm/entities/QuestionImages";

export default {
  render(image: QuestionImage) {
    return {
      id: image.id,
      url: `localhost:3333/questions/images/${image.path}`,
    };
  },

  renderMany(image: QuestionImage[]) {
    return image.map((image) => this.render(image));
  },
};
