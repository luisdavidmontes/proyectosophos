import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column("text")
  type!: string;

  @Column("number")
  number!: number;

  @Column("timestamp")
  createdAt!: Date;

  @Column("bool")
  active!: boolean;

  @Column("number")
  balance!: number;
}
