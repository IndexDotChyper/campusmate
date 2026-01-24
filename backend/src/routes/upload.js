import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";

const router = express.Router();
const upload = multer();

let uploadedPdfContext = "";

router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const data = await pdfParse(req.file.buffer);
  uploadedPdfContext = data.text;

  res.json({ message: "PDF uploaded successfully" });
});

export function getUploadedPdfContext() {
  return uploadedPdfContext;
}

export default router;
