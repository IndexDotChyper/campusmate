import express from "express";
import { askAI } from "../services/groqService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  const reply = await askAI(message);
  res.json({ reply });
});

export default router;
