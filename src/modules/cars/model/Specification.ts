import crypto from "node:crypto";

export class Specification {
  id?: string;
  created_at?: Date;
  name: string;
  description: string;

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date();
    }

    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
