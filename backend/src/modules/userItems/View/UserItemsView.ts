import { Item } from "@modules/items/infra/typeorm/entities/Item";

export default {
  render(item: Item) {
    return {
      name: item.name,
      image: item.image,
      id: item.id,
    };
  },

  renderMany(items: Item[]) {
    return items.map((item) => this.render(item));
  },
};
