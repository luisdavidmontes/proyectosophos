import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column("text")
  identicationType!: "passport" | "document";

  @Column("number")
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
}
