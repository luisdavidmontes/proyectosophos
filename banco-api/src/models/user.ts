import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column("text")
  username!: string;

  @Column("text")
  password!: string;
}
