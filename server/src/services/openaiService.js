// src/services/openaiService.js - This file contains the service that interacts with the OpenAI API to generate responses based on user messages. - 2026-04.

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function openaiService(message) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0].message.content;
}
