import { SchedulerConfig } from "../SchedulerConfig";
import { PostgresSQLRepository } from "../../repository/PostgreSQLRepository";
import { UserEntity } from "../../data/UserEntity";
import { UserCrudUseCase } from "../../../domain/usecase/user/UserCrudUseCase";
import { v4 as uuid } from "uuid";

const repositoryPostgresSQL = new PostgresSQLRepository(UserEntity);
const useCasePostgresSQL = new UserCrudUseCase(repositoryPostgresSQL);

export const schedulerGetAllUsers = async () => {
  const scheduler: SchedulerConfig = new SchedulerConfig(
    "* * * * * *",
    async () => {
      const data: any = {
        name: "lo que sea",
        email: uuid().concat("@mail.com"),
      };
      await useCasePostgresSQL.registerUser(data);
      return useCasePostgresSQL.getAllUsers();
    }
  );
  await scheduler.start();
};
