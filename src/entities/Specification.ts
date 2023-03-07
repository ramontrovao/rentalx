import crypto from "node:crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("specifications")
export class Specification {
  @PrimaryColumn()
  id?: string;
  @Column()
  created_at: Date;
  @Column()
  name: string;
  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
