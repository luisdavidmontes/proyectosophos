import { Request, Response } from "express";
import { User } from "../models/user";

export async function login(req: Request, res: Response) {
  const user = req.body as User;
  return res.status(200).send(user);
}
