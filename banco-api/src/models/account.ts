import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  type!: "current" | "savings";

  @Column("numeric")
  number!: number;

  @Column("timestamp")
  createdAt!: Date;

  @Column("bool")
  active!: boolean;

  @Column("numeric")
  balance!: number;

  @ManyToOne(() => Client, (client) => client.id)
  @JoinColumn()
  client!: Client;
}
