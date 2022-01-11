import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  identicationType!: "passport" | "document";

  @Column("numeric")
  identificationNumber!: number;

  @Column("text")
  name!: string;

  @Column("text")
  lastName!: string;

  @Column("text")
  email!: string;

  @Column("timestamp")
  birthday!: Date;

  @Column("timestamp")
  date!: Date;

  @OneToMany(() => Account, (account) => account.client)
  accounts!: Account[];
}
