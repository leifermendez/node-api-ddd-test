import { Server } from "./Server";
export class ExampleApp {
  server?: Server;

  async start(): Promise<void> {
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

try {
  const example: ExampleApp = new ExampleApp();
  example.start().then();
} catch (e) {
  console.log(e);
  process.exit(1);
}
