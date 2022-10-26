import { Router } from "express";
const exampleRouter = Router();

exampleRouter.get("", () => console.log("o"));
exampleRouter.get("", () => console.log("xd"));

export default exampleRouter;
