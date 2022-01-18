import { Request, Response } from "express";
import { User } from "../models/user";
import { sign } from "jsonwebtoken";

export async function login(req: Request, res: Response) {
  const user = req.body as User;
  const userDB = await User.findOne({ where: { username: user.username } });
  if (userDB && userDB.password === user.password) {
    const token = sign(user, "secret", { expiresIn: 60 * 60 });
    return res.status(200).send({ user, token });
  } else {
    return res.status(401).send("not-authorized");
  }
}
