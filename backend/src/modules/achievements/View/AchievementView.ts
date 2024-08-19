import { Achievement } from "../infra/typeorm/entities/Achievement";

export default {
  render(achievement: Achievement) {
    return {
      id: achievement.id,
      name: achievement.name,
      description: achievement.description,
      created_at: achievement.created_at,
      url: `https://200.201.11.141/api/achievements/images/${achievement.image}`,
    };
  },

  renderMany(achievements: Achievement[]) {
    return achievements.map((achievement) => this.render(achievement));
  },
};
