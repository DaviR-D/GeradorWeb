import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Activity } from "@modules/activity/infra/typeorm/entities/Activity";

import { QuestionImage } from "./QuestionImages";

@Entity("questions")
class Question {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  alternatives: string;

  @Column()
  answer: string;

  @Column()
  score: number;

  @Column()
  template: number;

  @ManyToOne(() => Activity)
  @JoinColumn({ name: "activity_id" })
  activity: Activity;

  @Column()
  activity_id: string;

  @OneToMany(() => QuestionImage, (image) => image.question, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "question_id" })
  questionImages: QuestionImage[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Question };
