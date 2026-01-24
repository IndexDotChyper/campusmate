import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pdfParse from "pdf-parse";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRELOAD_DIR = path.join(__dirname, "../../preloaded_pdfs");
let preloadedContext = "";

export async function loadPreloadedPdfs() {
  if (!fs.existsSync(PRELOAD_DIR)) {
    console.log("⚠️ No preloaded_pdfs folder found");
    return;
  }

  const files = fs.readdirSync(PRELOAD_DIR).filter(f => f.endsWith(".pdf"));

  for (const file of files) {
    const buffer = fs.readFileSync(path.join(PRELOAD_DIR, file));
    const data = await pdfParse(buffer);
    preloadedContext += `\n\n--- ${file} ---\n${data.text}`;
  }

  console.log("✅ Preloaded PDFs loaded");
}

export function getPreloadedContext() {
  return preloadedContext;
}
