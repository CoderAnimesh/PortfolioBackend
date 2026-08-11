import express from "express";
import { sendReplyMail } from "../middleware/mail.controller.js";

const router = express.Router();

router.post("/reply", sendReplyMail);

export default router;
