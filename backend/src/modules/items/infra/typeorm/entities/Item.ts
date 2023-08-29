import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("itens")
class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  price: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Item };
