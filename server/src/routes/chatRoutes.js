// src/routes/chatRoutes.js - Rota para o chat - 2026-04.

import { Router } from "express";
import { chat } from "../controllers/chatController.js";

const router = Router();

// ROTA REAL DO CHAT
router.post("/chat", chat);

// ROTA DE TESTE
router.get("/ping", (req, res) => {
  res.json({ message: "ping from backend" });
});

export default router;
