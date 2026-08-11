import nodemailer from "nodemailer";
import { db } from "../drizzle/db.js"; // adjust path
import { contact } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";

export const sendReplyMail = async (req, res) => {
  const { to, message, contactId } = req.body;

  if (!to || !message || !contactId) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.mail.yahoo.com",
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // APP PASSWORD
      },
    });

    // ✅ SEND MAIL
    await transporter.sendMail({
      from: `"Support Team" <${process.env.MAIL_USER}>`,
      to,
      subject: "Regarding Your Inquiry",
      text: message,
    });

    // ✅ UPDATE DB ONLY AFTER MAIL SUCCESS
    await db
      .update(contact)
      .set({ contacted: true })
      .where(eq(contact.id, contactId));

    res.status(200).json({
      success: true,
      message: "Mail sent & contact marked as contacted",
    });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ error: "Failed to send mail" });
  }
};
