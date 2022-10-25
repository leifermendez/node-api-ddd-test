import { UserRepository } from "../domain/models/user/UserRepository";
import {User} from "../domain/models/user/User";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public  registerUser = async ( {name, email, description} ) => {
    const userValue = new User(name, email,description );
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated
  }

  public  getDetailUSer = async (uuid:string) => {
    const user = await this.userRepository.findUserById(uuid)
    return user
  }
}
