import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account";
import { Registry } from "./registry";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  identificationType!: "passport" | "document";

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

  @Column({
    nullable: false,
    type: "timestamp",
  })
  date!: Date;

  @OneToMany(() => Account, (account) => account.client)
  accounts!: Account[];
}
