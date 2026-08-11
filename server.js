import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactAdminRoutes from "./routes/contact.admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import mailRoutes from "./routes/mail.routes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


// Health Check Route (to prevent hosting instances like Render from sleeping)
app.get(["/health", "/api/health"], (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy and active",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes); // ✅ REGISTER CONTACT ROUTE
app.use("/api/admin/contact", contactAdminRoutes);
app.use("/api/admin", mailRoutes);
// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages/404.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
