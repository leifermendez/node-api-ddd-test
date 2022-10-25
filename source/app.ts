import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./infrastructure/route/UserRoute";
import dbInit from "./infrastructure/db/mongo";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
dbInit().then();
app.use("/users/", userRoute);
app.listen(port, () => console.log(`Run the app in the port: ${port}`));
