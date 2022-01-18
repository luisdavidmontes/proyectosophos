import { Request, Response } from "express";
import { AccountValidationStrategy } from "../helper/accountValidationStrategy";
import { CurrentStrategy } from "../helper/currentStrategy";
import { badRequest, notFound } from "../helper/responses";
import { SavingsStrategy } from "../helper/savingsStrategy";
import { Operation } from "../interfaces/operation";
import { Account } from "../models/account";
import { Client } from "../models/client";
import { Registry } from "../models/registry";

export async function getAll(req: Request, res: Response) {
  const accounts = await Account.find({ relations: ["client"] });
  return res.status(200).send(accounts);
}

export async function create(req: Request, res: Response) {
  const account = req.body as Account;
  const accountDB = await Account.save(account);
  return res.status(200).send(accountDB);
}

export async function sendMoney(req: Request, res: Response) {
  const { from, to, balance: bal, type } = req.body as Operation;
  const balance = parseInt(bal.toString());
  const fromAccount = await Account.findOne({
    where: { id: from },
    relations: ["client"],
  });
  const toAccount = await Account.findOne({
    where: { number: to },
    relations: ["client"],
  });
  if (!fromAccount || !toAccount) return notFound(res);

  const oldBalance = fromAccount.balance;
  fromAccount.balance = fromAccount.balance - balance;
  toAccount.balance = toAccount.balance + balance;

  if (toAccount.type === "current") {
    const result = CurrentStrategy(toAccount);
    if (!result) return badRequest(res);
  } else {
    const result = SavingsStrategy(toAccount);
    if (!result) return badRequest(res);
  }
  if (fromAccount.type === "current") {
    const result = CurrentStrategy(fromAccount);
    if (!result) return badRequest(res);
  } else {
    const result = SavingsStrategy(fromAccount);
    if (!result) return badRequest(res);
  }

  const registry = new Registry();
  registry.from = fromAccount.client;
  registry.to = toAccount.client;
  registry.type = type;
  registry.balance = oldBalance;
  registry.result = fromAccount.balance;
  registry.date = new Date().toString();
  await Registry.save(registry);

  const newFromAccount = await Account.save(fromAccount);
  const newAccountBalance = await Account.save(toAccount);
  return res.status(200).send(newAccountBalance);
}

export async function consign(req: Request, res: Response) {
  const { from, to, balance, type } = req.body as Operation;
  if (type !== "consign") return badRequest(res);

  const fromAccount = await Account.findOne({
    where: { id: from },
    relations: ["client"],
  });
  const account = await Account.findOne({
    where: { number: to },
    relations: ["client"],
  });
  if (!account || !fromAccount) return notFound(res);
  const oldBalance = account.balance;
  account.balance = account.balance + balance;
  if (account.type === "current") {
    const result = CurrentStrategy(account);
    if (!result) return badRequest(res);
  } else {
    const result = SavingsStrategy(account);
    if (!result) return badRequest(res);
  }
  const registry = new Registry();
  registry.from = fromAccount.client;
  registry.to = account.client;
  registry.type = type;
  registry.balance = oldBalance;
  registry.result = account.balance;
  registry.date = new Date().toString();

  const resgistryResult = await Registry.save(registry);
  const accountDB = await Account.save(account);
  return res.status(200).send(resgistryResult);
}

export async function withdraw(req: Request, res: Response) {
  const { type, from, balance } = req.body as Operation;
  const account = await Account.findOne({
    where: { id: from },
    relations: ["client"],
  });
  if (!account) return notFound(res);
  const oldBalance = account.balance;
  account.balance = account.balance - balance;

  if (account.type === "current") {
    const result = CurrentStrategy(account);
    console.log(account.balance, result);
    if (!result) return badRequest(res);
  } else {
    const result = SavingsStrategy(account);
    if (!result) return badRequest(res);
  }
  const registry = new Registry();
  registry.from = account.client;
  registry.to = account.client;
  registry.type = type;
  registry.balance = oldBalance;
  registry.result = account.balance;
  registry.date = new Date().toString();
  await Registry.save(registry);

  const result = await Account.save(account);
  return res.status(200).send(result);
}

export async function update(req: Request, res: Response) {
  const account = req.body as Account;
  const accountDB = await Account.save(account);
  return res.status(200).send(accountDB);
}

export async function deleteAccount(req: Request, res: Response) {
  const id = req.params.id;
  const result = await Account.delete(id);
  return res.status(200).send(result);
}
