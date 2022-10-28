import { SchedulerConfig } from "../SchedulerConfig";
import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { UserEntity } from "../../data/UserEntity";
import { UserCrudUseCase } from "../../../domain/usecase/user/UserCrudUseCase";

const repositoryPostgresSQL = new PostgresSQLRepository(UserEntity);
const useCasePostgresSQL = new UserCrudUseCase(repositoryPostgresSQL);

export const schedulerGetAllUsers = async () => {
  const scheduler: SchedulerConfig = new SchedulerConfig(
    "5 0 1 * *", //At 00:05 on day-of-month 1
    async () => useCasePostgresSQL.getAllUsers()
  );
  await scheduler.start();
};
