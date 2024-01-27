import { Achievement } from "../infra/typeorm/entities/Achievement";

export default {
  render(achievement: Achievement) {
    return {
      id: achievement.id,
      name: achievement.name,
      description: achievement.description,
      created_at: achievement.created_at,
      url: `http://localhost:3000/achievements/images/${achievement.image}`,
    };
  },

  renderMany(achievements: Achievement[]) {
    return achievements.map((achievement) => this.render(achievement));
  },
};
