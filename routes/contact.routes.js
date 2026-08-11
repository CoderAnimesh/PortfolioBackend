import { Router } from "express";
import { db } from "../drizzle/db.js";
import { contact } from "../drizzle/schema.js";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Let database generate ID
    await db.insert(contact).values({
      name,
      email,
      message,
    });

    res.json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
