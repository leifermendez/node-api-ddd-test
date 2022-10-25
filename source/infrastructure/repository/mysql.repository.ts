/**
 * Infra! Mongo 🙌
 */
import { User } from "../../domain/models/user/User";
import { UserRepository } from "../../domain/models/user/UserRepository";
import UserModel from "../model/user.shchema"
/**
 * Mysql!
 */
export class MySqlRepository implements UserRepository {
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
