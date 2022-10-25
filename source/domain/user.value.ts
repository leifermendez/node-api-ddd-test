import { v4 as uuid } from "uuid";
import { User } from "./models/user/User";

export class UserValue implements User {
  uuid: string;
  name: string;
  email: string;
  description: string;

  constructor({ name, email, description }: { name: string; email: string, description?:string }) {
    this.uuid = uuid();
    this.name = name;
    this.email = email;
    this.description = description  ?? "default";
  }
}
