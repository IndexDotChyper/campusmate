import Groq from "groq-sdk";
import { GROQ_API_KEY } from "../config.js";
import { getPreloadedContext } from "./preloadPdfService.js";
import { getUploadedPdfContext } from "../routes/upload.js";

const groq = new Groq({ apiKey: GROQ_API_KEY });

export async function askAI(question) {
  const context =
    getUploadedPdfContext() || getPreloadedContext() || "";

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: "Answer based on the provided context."
      },
      {
        role: "user",
        content: `Context:\n${context}\n\nQuestion:\n${question}`
      }
    ]
  });

  return completion.choices[0].message.content;
}
