import { Score } from "../infra/typeorm/entities/Score";

export default {
  render(score: Score) {
    return {
      id: score.id,
      score: score.score,
      user: score.user_id,
      activity: score.activity_id,
    };
  },

  renderMany(scores: Score[]) {
    return scores.map((score) => this.render(score));
  },
};
