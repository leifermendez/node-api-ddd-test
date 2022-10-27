import { Request, Response } from "express";
import { UserCrudUseCase } from "../../../domain/usecase/user/UserCrudUseCase";

export class UserController {
  constructor(private userUseCase: UserCrudUseCase) {
    this.registerUser = this.registerUser.bind(this);
    this.getDetailUSer = this.getDetailUSer.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  public async getDetailUSer({ query }: Request, res: Response) {
    const { uuid } = query;
    const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ user });
  }

  public async registerUser({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser(body);
    res.send({ user });
  }

  public getAllUsers = async ({ body }: Request, res: Response) => {
    const list = await this.userUseCase.getAllUsers();
    res.send(list);
  };
}
