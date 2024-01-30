import { Achievement } from "@modules/achievements/infra/typeorm/entities/Achievement";

export default {
  render(achievement: Achievement) {
    return {
      name: achievement.name,
      image: achievement.image,
      id: achievement.id,
    };
  },

  renderMany(achievements: Achievement[]) {
    return achievements.map((achievement) => this.render(achievement));
  },
};
