import { Item } from "@modules/items/infra/typeorm/entities/Item";

export default {
  render(item: Item) {
    return {
      name: item.name,
      image: item.image,
    };
  },

  renderMany(items: Item[]) {
    return items.map((item) => this.render(item));
  },
};
