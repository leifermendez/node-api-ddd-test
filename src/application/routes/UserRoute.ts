import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserController } from "../../infrastructure/controller/user/UserController";

const route = Router();
//const userRepo = new MongoRepository();
const userUseCase = new UserCrudUseCase(userRepo);
const userCtrl = new UserController(userUseCase);

route.post("", userCtrl.insertCtrl);
route.get("", userCtrl.getCtrl);

export default route;
