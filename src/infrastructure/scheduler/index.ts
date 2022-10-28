import { schedulerGetAllUsers } from "./user/UserScheduler";

const initScheduler = async () => {
  await schedulerGetAllUsers();
};

export default initScheduler;
