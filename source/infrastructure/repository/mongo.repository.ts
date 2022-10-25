/**
 * Infra! Mongo 🙌
 */
import { User } from "../../domain/models/users/User";
import { UserRepository } from "../../domain/models/users/UserRepository";
import UserModel from "../model/user.shchema"
/**
 * Mongo!
 */
export class MongoRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        const user = await UserModel.findOne({uuid})
        return user
    }
    async registerUser(userIn: User): Promise<any> {
        const user = await UserModel.create(userIn)
        return user
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find()
        return user
    }

}
