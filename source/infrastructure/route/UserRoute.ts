import { Router } from "express";
import { UserCrudUseCase } from "../../application/UserCrudUseCase";
import { UserController } from "../controller/UserController";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router();
const userRepo = new MongoRepository();
const userUseCase = new UserCrudUseCase(userRepo);

const userCtrl = new UserController(userUseCase);

route.post("", userCtrl.insertCtrl);
route.get("", userCtrl.getCtrl);

export default route;
