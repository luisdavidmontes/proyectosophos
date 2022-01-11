import { Request, Response } from "express";
import { Account } from "../models/account";
import { Client } from "../models/client";

export async function getAll(req: Request, res: Response) {
  const accounts = await Account.find({ relations: ["client"] });
  return res.status(200).send(accounts);
}

export async function create(req: Request, res: Response) {
  const account = req.body as Account;
  const accountDB = await Account.save(account);
  return res.status(200).send(accountDB);
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
