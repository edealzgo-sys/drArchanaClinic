import express from "express";
import { sendOtp, verifyOtpReset } from "../controllers/otpController.js";
const router = express.Router();
router.post("/send-otp", sendOtp);
router.post("/verify-otp-reset", verifyOtpReset);
export default router;
