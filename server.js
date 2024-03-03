import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// express app
const app = express();

// config
dotenv.config();
const PORT = process.env.PORT || 8080;
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Adding routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("This is my server");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
