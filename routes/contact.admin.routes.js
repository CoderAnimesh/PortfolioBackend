import { Router } from "express";
import { db } from "../drizzle/db.js";
import { contact } from "../drizzle/schema.js";
import { eq, desc } from "drizzle-orm";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// GET all messages
router.get("/", authMiddleware, async (req, res) => {
  try {
    const allContacts = await db
      .select()
      .from(contact)
      .orderBy(desc(contact.created_at)); // ✅ use desc() from drizzle-orm

    res.json(allContacts);
  } catch (err) {
    console.error("CONTACT FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
});

// DELETE a message by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    await db.delete(contact).where(eq(contact.id, id));

    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error("CONTACT DELETE ERROR:", err);
    res.status(500).json({ error: "Failed to delete message" });
  }
});

export default router;
