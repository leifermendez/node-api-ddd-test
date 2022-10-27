import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Mapper } from "../common/Mapper";
@Entity({name: "users"})
export class UserEntity implements Mapper<any, UserEntity> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  description: string;

  map(src: any): UserEntity {
    return Object.assign(new UserEntity(), src);
  }
}
