import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { User } from "../models/user";
import * as jwt from "jsonwebtoken";
import { env } from "../env";

export async function login(req: Request, res: Response) {
  const { username, password } = req.body as User;
  const users = await User.find({ username });
  const token = jwt.sign(users[0] || {}, env.JWT_SECRET as string, {
    expiresIn: "12h",
  });
  return res.status(200).send(token);
}
