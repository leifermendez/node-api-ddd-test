import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserController } from "../../infrastructure/controller/user/UserController";
import { MongoRepository } from "../../infrastructure/repository/MongoRepository";

const route = Router();
const schema = {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  uuid: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
};
const repository = new MongoRepository(schema, "users");
const useCase = new UserCrudUseCase(repository);
const controller = new UserController(useCase);

route.post("", controller.insertCtrl);
route.get("", controller.getCtrl);

export default route;
