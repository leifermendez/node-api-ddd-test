import { SchedulerConfig } from "../SchedulerConfig";
import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { UserEntity } from "../../data/UserEntity";
import { UserCrudUseCase } from "../../../domain/usecase/user/UserCrudUseCase";

const repositoryPostgresSQL = new PostgresSQLRepository(UserEntity);
const useCasePostgresSQL = new UserCrudUseCase(repositoryPostgresSQL);

export const schedulerGetAllUsers = async () => {
  const scheduler: SchedulerConfig = new SchedulerConfig("* * * * *", () =>
    useCasePostgresSQL.getAllUsers()
  );
  await scheduler.start();
};
