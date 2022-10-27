import { User } from "./User";

export interface UserRepository {
  save(user: User): Promise<User>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User>;
  update(user: User, id: string): Promise<User>;
  delete(id: string): Promise<void>;
}
