import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/index.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/resful_db");

const db = mongoose.connection;
db.on("error", (error) => console.error("error"));
db.once("open", () => console.log("database connected"));

app.use(cors());
app.use(express.json());
app.use("/Product", route);

app.listen(3000, () => console.log("server is running on port 3000"));
