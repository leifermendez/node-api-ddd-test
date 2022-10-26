import { CrudOperations } from "./common/CrudOperations";
import { Schema, model, Model } from "mongoose";

export class MongoCrudOperations<Data> implements CrudOperations<string> {
  private readonly modelData: Model<any>;

  constructor(definition: any, collection: string) {
    const schema = new Schema(definition, {
      timestamps: true,
    });
    this.modelData = model(collection, schema);
  }

  async save(entity: any): Promise<any> {
    return this.modelData.create(entity);
  }

  async list(): Promise<any> {
    return this.modelData.find();
  }

  async findById(id: string): Promise<any> {
    return this.modelData.findOne({ id });
  }

  async update(entity: any, id: string): Promise<any> {
    return this.modelData.findOneAndUpdate({ _id: id }, entity, { new: true });
  }

  async delete(id: string): Promise<void> {
    this.modelData.deleteOne({ id });
  }
}
