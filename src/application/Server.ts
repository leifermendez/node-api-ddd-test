import "dotenv/config";
import express from "express";
import cors from "express";
import dbMongoInit from "./db/MongoConfig";
import * as http from "http";
import { registerRouters } from "./routes";
import dbMySQLInit from "./db/MySQLConfig";
import dbPostgresSQLInit from "./db/PostgreSQLConfig";

export class Server {
  private readonly port: string;
  private readonly app: express.Express;
  private _httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.connectToDatabase().then();
    registerRouters(this.app);
  }

  connectToDatabase = async () => {
    await dbMongoInit();
    await dbMySQLInit();
    await dbPostgresSQLInit()
  };

  listen = async (): Promise<void> => {
    return new Promise((resolve) => {
      this._httpServer = this.app.listen(this.port, () => {
        console.log(
          `App is running at http://localhost:${this.port} in
           ${this.app.get("env")} mode`
        );
        console.log("  Press CTRL-C to stop\n");
        resolve();
      });
    });
  };

  get httpServer(): http.Server {
    return this._httpServer;
  }

  stop = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  };
}
