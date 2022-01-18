import { Account } from "../models/account";

export const SavingsStrategy = ({ balance }: Account) => {
  return balance >= 0;
};
