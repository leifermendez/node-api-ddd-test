import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./infrastructure/route/UserRoute";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/user/", userRoute);
app.listen(port, () => console.log(`Run the app in the port: ${port}`));
