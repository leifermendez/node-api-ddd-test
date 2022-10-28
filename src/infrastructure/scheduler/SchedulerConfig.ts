import cron from "node-cron";

export class SchedulerConfig {
  private readonly _expression: string;

  private readonly _lamda: Function;

  constructor(expression: string, lamda: Function) {
    this._expression = expression;
    this._lamda = lamda;
  }

  start = async () => {
    cron.schedule(this._expression, async () => {
      const result = await this._lamda();
      console.log("result => ", result);
    });
  };
}
