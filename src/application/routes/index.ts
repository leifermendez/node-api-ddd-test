import express from "express";
import UserRoute from "./UserRoute";

export const registerRouters = (app: express.Express) => {
  app.use("/users", UserRoute);
};
