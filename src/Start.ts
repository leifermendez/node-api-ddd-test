import { Server } from "./Server";
export class MoocBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || "3000";
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.httpServer;
  }

  async stop() {
    return this.server?.stop();
  }
}
