import {
  BaseEntity,
  Column,
  Double,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client";

@Entity()
export class Registry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Client, (client) => client.id)
  @JoinColumn()
  to!: Client;

  @ManyToOne(() => Client, (client) => client.id)
  @JoinColumn()
  from!: Client;

  @Column("text")
  type!: "consign" | "withdraw" | "between";

  @Column("double")
  balance!: number;

  @Column("double")
  result!: number;

  @Column("timestamp")
  date!: string;
}
