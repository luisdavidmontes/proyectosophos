import { Response } from "express";
import { Strategy } from "../interfaces/strategy";

export async function AccountValidationStrategy(
  strategy: Strategy,
  res: Response
) {
  const resp = await strategy();
  if (!resp) return res.status(400).send("operation-invalid");
  return res.status(200).send("operation-success");
}
