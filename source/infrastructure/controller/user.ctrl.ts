import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this)
    this.getCtrl = this.getCtrl.bind(this)
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ user });
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser(body);
    res.send({ user });
  }
}
