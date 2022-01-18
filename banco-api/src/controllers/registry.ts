import { Request, Response } from "express";
import { badRequest } from "../helper/responses";
import { Registry } from "../models/registry";

export async function getByClient(req: Request, res: Response) {
  const id = req.params.id;
  if (!id) return badRequest(res);
  const registries = await Registry.find({
    where: { from: id },
    relations: ["from", "to"],
  });
  return res.status(200).send(registries);
}
