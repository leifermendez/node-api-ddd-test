import { Request, Response } from "express";
import { registerUser, getDetailUser } from "../services/user.service";

const insertUser = async ({ body }: Request, res: Response) => {
  const user = await registerUser(body);
  res.send({ user });
};

const getUser = async ({ query }: Request, res: Response) => {
  const { email = '' } = query;
  const user = await getDetailUser(`${email}`);
  res.send({ user });
};

export { insertUser, getUser };
