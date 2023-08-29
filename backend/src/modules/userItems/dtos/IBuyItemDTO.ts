import { UserItems } from "../infra/typeorm/entities/UserItems";

interface IBuyItemDTO {
  item_id: string;
  user_id: string;
}

export { IBuyItemDTO };
