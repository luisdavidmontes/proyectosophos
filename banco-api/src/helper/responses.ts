import { Response } from "express";

export function badRequest(res: Response) {
  return res.status(400).send("bad-request");
}
export function notFound(res: Response) {
  return res.status(404).send("not-found");
}
