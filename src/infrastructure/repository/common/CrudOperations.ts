export interface CrudOperations<ID> {
  save(entity: any): Promise<any>;
  list(): Promise<any>;
  findById(id: ID): Promise<any>;
  update(entity: any, id: ID): Promise<any>;
  delete(id: ID): Promise<void>;
}
