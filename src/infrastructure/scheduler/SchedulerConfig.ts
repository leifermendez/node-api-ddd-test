import cron from "node-cron";

export class SchedulerConfig {
  private readonly _expression: string;

  private readonly _lamda: Function;

  constructor(expression: string, lamda: Function) {
    this._expression = expression;
    this._lamda = lamda;
  }

  get expression(): string {
    return this._expression;
  }

  get lamda(): Function {
    return this._lamda;
  }

  start = () => {
    cron.schedule(this._expression, this._lamda);
  };
}
