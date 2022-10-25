/**
 * Infra! Mongo 🙌
 */
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
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
  async registerUser(userIn: UserEntity): Promise<any> {
    const user = MOCK_USER
    return user;
  }
  async listUser(): Promise<any> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER]
    return users;
  }
}
