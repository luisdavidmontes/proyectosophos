import { Account } from "../models/account";

export const CurrentStrategy = ({ balance }: Account) => {
  return balance >= 2000;
};
