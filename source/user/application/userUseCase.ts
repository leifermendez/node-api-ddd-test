import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public  registerUser = async ({ name, email, description }) => {
    const userValue = new UserValue({ name, email });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated
  }

  public  getDetailUSer = async (uuid:string) => {
    const user = await this.userRepository.findUserById(uuid)
    return user
  }
}
