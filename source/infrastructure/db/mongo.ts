import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

const dbInit = async () => {
  try {
    console.log("Conectando a mongo");
    await connect(DB_URI);
    console.log("Solo mollejadb");
  } catch (e) {
    console.log("error:", e);
    console.log("Fallo al conectar a mongo");
  }
};

export default dbInit;
