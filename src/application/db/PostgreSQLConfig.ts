import { DataSource } from "typeorm";
import { UserEntity } from "../../infrastructure/data/UserEntity";

export const PostgresSQLDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_POSTGRES_HOST,
  port: parseInt(`${process.env.DB_POSTGRES_PORT}`),
  username: process.env.DB_POSTGRES_USER,
  password: process.env.DB_POSTGRES_PASSWORD,
  database: process.env.DB_POSTGRES_DATABASE,
  entities: [UserEntity],
});

const dbPostgresSQLInit = async () => {
  try {
    console.log("Connecting to PostgreSQL");
    await PostgresSQLDataSource.initialize();
    console.log("Connected to PostgreSQL");
  } catch (e) {
    console.error("Error during Data Source initialization", e);
  }
};

export default dbPostgresSQLInit;
