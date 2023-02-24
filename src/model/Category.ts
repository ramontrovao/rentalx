import crypto from "node:crypto";

export class Category {
  id?: string;
  created_at?: Date;
  name: string;
  description: string;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}
