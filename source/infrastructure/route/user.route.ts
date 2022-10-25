import { Router } from "express";
import { UserCrudUseCase } from "../../application/UserCrudUseCase";
import { UserController } from "../controller/UserController";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router()
/**
 * Iniciar Repository
 */
const userRepo = new MongoRepository()

/**
 * Iniciamos casos de uso
 */

const userUseCase = new UserCrudUseCase(userRepo)

/**
 * Iniciar User Controller
 */

const userCtrl = new UserController(userUseCase)

/**
 *
 */

route.post(`/user`, userCtrl.insertCtrl)
route.get(`/user`, userCtrl.getCtrl)

export default route
