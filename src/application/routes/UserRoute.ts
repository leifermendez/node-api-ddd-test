import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserController } from "../../infrastructure/controller/user/UserController";
import { MongoRepository } from "../../infrastructure/repository/MongoRepository";
import { MySQLRepository } from "../../infrastructure/repository/MySQLRepository";
import userSchema from "../../infrastructure/data/UserMongo";
import { UserEntity } from "../../infrastructure/data/UserEntity";

const UserRoute = Router();

const repositoryMongo = new MongoRepository(userSchema, "users");
const useCaseMongo = new UserCrudUseCase(repositoryMongo);
const controllerMongo = new UserController(useCaseMongo);

UserRoute.post("/mongo", controllerMongo.registerUser);
UserRoute.get("/mongo", controllerMongo.getDetailUSer);
UserRoute.get("/mongo/all", controllerMongo.getAllUsers);
UserRoute.put("/mongo", controllerMongo.updateUser);

const repositoryMySQL = new MySQLRepository(UserEntity);
const useCaseMySQL = new UserCrudUseCase(repositoryMySQL);
const controllerMySQL = new UserController(useCaseMySQL);

UserRoute.post("/mysql", controllerMySQL.registerUser);
UserRoute.get("/mysql", controllerMySQL.getDetailUSer);

export default UserRoute;
