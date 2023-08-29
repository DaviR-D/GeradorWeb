import { Item } from "../infra/typeorm/entities/Item";

export default {
  render(item: Item) {
    return {
      id: item.id,
    };
  },

  renderMany(items: Item[]) {
    return items.map((item) => this.render(item));
  },
};
