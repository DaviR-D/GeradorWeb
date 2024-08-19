import { QuestionImage } from "../infra/typeorm/entities/QuestionImages";

export default {
  render(image: QuestionImage) {
    return {
      id: image.id,
      url: `https://200.201.11.141/api/questions/images/${image.path}`,
    };
  },

  renderMany(image: QuestionImage[]) {
    return image.map((image) => this.render(image));
  },
};
