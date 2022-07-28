import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Question } from "./Question";

@Entity("questionImages")
class QuestionImage {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => Question, (question) => question.questionImages)
  @JoinColumn({ name: "question_id" })
  question: Question;
}

export { QuestionImage };
