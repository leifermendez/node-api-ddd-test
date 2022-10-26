import { UserRepository } from "../../models/user/UserRepository";
import { User } from "../../models/user/User";

export class UserCrudUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async ({ name, email, description }) => {
    const user = new User(name, email, description);
    return await this.userRepository.save(user);
  };

  public getDetailUSer = async (uuid: string) => {
    return await this.userRepository.findById(uuid);
  };
}
