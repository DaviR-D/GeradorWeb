import { Item } from "../infra/typeorm/entities/Item";

export default {
  render(item: Item) {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      created_at: item.created_at,
      url: `http://localhost:3000/items/images/${item.image}`,
    };
  },

  renderMany(items: Item[]) {
    return items.map((item) => this.render(item));
  },
};
