import { connect } from "mongoose";

const DB_URI = `${process.env.DB_MONGO_URI}`;

const dbMongoInit = async () => {
  try {
    console.log("Connecting to MongoDB");
    await connect(DB_URI);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("error:", e);
    console.log("Failed trying to connect to  MongoDB");
  }
};

export default dbMongoInit;
