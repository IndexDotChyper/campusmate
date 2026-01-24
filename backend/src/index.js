import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import chatRoutes from "./routes/chat.js";
import uploadRoutes from "./routes/upload.js";
import { loadPreloadedPdfs } from "./services/preloadPdfService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/upload", uploadRoutes);

await loadPreloadedPdfs();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
