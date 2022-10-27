import { MysqlDataSource } from "../../application/db/MySQLConfig";
import { CrudOperations } from "./common/CrudOperations";
import { Repository } from "typeorm/repository/Repository";

export class MySQLRepository implements CrudOperations<number> {
  private readonly repository: Repository<any>;

  constructor(entity: any) {
    this.repository = MysqlDataSource.getRepository(entity);
  }

  async save(entity: any): Promise<any> {
    return await this.repository.save(entity);
  }

  async list(): Promise<any> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<any> {
    return await this.repository.findOneBy({ id });
  }

  async update(entity: any, id: number): Promise<any> {
    const entityFound = this.repository.findOneBy({ id });
    const entitySaved = Object.assign(entityFound, entity);
    return await this.repository.save(entitySaved);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
