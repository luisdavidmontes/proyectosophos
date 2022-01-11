import express from "express";
import cors from "cors";

export const PORT = 3000;
export const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }), express.json());
