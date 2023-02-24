export class Category {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}
