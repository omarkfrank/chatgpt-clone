// server/src/server.js - Servidor Express para a API de ChatGPT - 2026-04.

import "dotenv/config";

import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", chatRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
