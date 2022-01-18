import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["token"] as string;
  if (token) {
    const payload = verify(token, "secret");
    if (payload) next();
    return;
  }
  return res.status(401).send("not-authorized");
}
