import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // Vite default
}));
// routes
app.use("/api/admin", adminRoutes);

// mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
