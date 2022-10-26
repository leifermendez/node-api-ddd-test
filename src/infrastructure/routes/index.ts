import express from "express";
import exampleRouter from "./ExampleRouter";

export const registerRouters = (app: express.Express) => {
  app.use(exampleRouter);
};
