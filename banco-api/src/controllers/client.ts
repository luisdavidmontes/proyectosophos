import { Request, Response } from "express";
import { Client } from "../models/client";

export async function getAll(req: Request, res: Response) {
  const users = await Client.find({ relations: ["accounts"] });
  return res.status(200).send(users);
}

export async function create(req: Request, res: Response) {
  const client = req.body as Client;
  const clientDB = await Client.save(client);
  return res.status(200).send(clientDB);
}

export async function update(req: Request, res: Response) {
  const client = req.body as Client;
  const clientDB = await Client.save(client);
  return res.status(200).send(clientDB);
}

export async function deleteClient(req: Request, res: Response) {
  const client = req.body as Client;
  const clientDB = await Client.delete(client);
  return res.status(200).send(clientDB);
}
