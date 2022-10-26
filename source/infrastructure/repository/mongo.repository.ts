import { User } from "../../domain/models/users/User";
import { UserRepository } from "../../domain/models/users/UserRepository";
import UserModel from "../model/user.shchema";

export class MongoRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    return UserModel.findOne({ uuid });
  }
  async registerUser(userIn: User): Promise<any> {
    return await UserModel.create(userIn);
  }
  async listUser(): Promise<any> {
    return UserModel.find();
  }
}
