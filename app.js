import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error("error"));
db.once("open", () => console.log("database connected"));

app.use(cors());
app.use(express.json());
app.use("/Product", route);

app.listen(PORT, () => console.log("server is running on port " + PORT));
