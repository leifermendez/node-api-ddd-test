import { Router } from "express";
import { UserCrudUseCase } from "../../domain/usecase/user/UserCrudUseCase";
import { UserController } from "../../infrastructure/controller/user/UserController";
import { MongoRepository } from "../../infrastructure/repository/MongoRepository";
import { MySQLRepository } from "../../infrastructure/repository/MySQLRepository";
import { User } from "../../domain/models/user/User";

const UserRoute = Router();
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
const repositoryMongo = new MongoRepository(schema, "users");
const useCaseMongo = new UserCrudUseCase(repositoryMongo);
const controllerMongo = new UserController(useCaseMongo);

UserRoute.post("users", controllerMongo.insertCtrl);
UserRoute.get("", controllerMongo.getCtrl);

const repositoryMySQL = new MySQLRepository(User);
const useCaseMySQL = new UserCrudUseCase(repositoryMySQL);
const controllerMySQL = new UserController(useCaseMySQL);

//UserRoute.post("mysql/", controllerMySQL.insertCtrl);
//UserRoute.get("mysql/", controllerMySQL.getCtrl);


export default UserRoute;
