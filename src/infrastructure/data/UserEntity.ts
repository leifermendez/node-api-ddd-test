import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity({ name: "users" })
export class UserEntity {
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
}
