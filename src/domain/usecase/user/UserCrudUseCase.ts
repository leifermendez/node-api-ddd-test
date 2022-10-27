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

  public getAllUsers = async () => {
    return await this.userRepository.list();
  };

  public updateUser = async (
    uuid: string,
    { name, email, description }: any
  ) => {
    let userFound = await this.userRepository.findById(uuid);
    const user = new User(name, email, description);
    userFound = Object.assign(userFound, user);
    userFound.uuid = uuid;
    return await this.userRepository.save(userFound);
  };

  public deleteUser = async (uuid: string) => {
    const userFound = await this.userRepository.findById(uuid);
    await this.userRepository.delete(uuid);
    return userFound;
  };
}
