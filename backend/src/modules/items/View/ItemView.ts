import { Item } from "../infra/typeorm/entities/Item";

export default {
  render(item: Item) {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      created_at: item.created_at,
      url: `https://200.201.11.141/api/items/images/${item.image}`,
    };
  },

  renderMany(items: Item[]) {
    return items.map((item) => this.render(item));
  },
};
