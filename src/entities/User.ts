import crypto from "node:crypto";

import { Column, PrimaryColumn } from "typeorm";

export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
