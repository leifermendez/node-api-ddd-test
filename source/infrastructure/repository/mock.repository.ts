/**
 * Infra! Mongo 🙌
 */
import { User } from "../../domain/models/users/User";
import { UserRepository } from "../../domain/models/users/UserRepository";
/**
 * MOCK!
 */

const MOCK_USER = {
    name: "Leifer",
    description: "hola",
    uuid: "000-000",
  };

export class MockRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    const user = MOCK_USER
    return user;
  }
  async registerUser(userIn: User): Promise<any> {
    const user = MOCK_USER
    return user;
  }
  async listUser(): Promise<any> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER]
    return users;
  }
}
