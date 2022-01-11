import express from "express";

export const PORT = 3000;
export const app = express();
app.use(express.urlencoded({}), express.json());
