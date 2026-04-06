// controllers/chatController.js - Handles chat-related requests and responses, including processing user messages and generating replies using the OpenAI service. - 2026 -04

import openaiService from "../services/openaiService.js";

export async function chat(req, res) {
  const { message } = req.body;

  const reply = await openaiService(message);

  res.json({
    reply,
  });
}
