import { UserRepository } from "../../models/user/UserRepository";
import { User } from "../../models/user/User";

export class UserCrudUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async ({ name, email, description }) => {
    const userValue = new User(name, email, description);
    return await this.userRepository.registerUser(userValue);
  };

  public getDetailUSer = async (uuid: string) => {
    return await this.userRepository.findUserById(uuid);
  };
}
