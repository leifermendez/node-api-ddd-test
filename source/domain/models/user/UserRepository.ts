import { User } from "./User";

export interface UserRepository {
  findUserById(uuid: string): Promise<User | null>;
  registerUser(user:User): Promise<User | null>;
  listUser(): Promise<User[] | null>;
}
