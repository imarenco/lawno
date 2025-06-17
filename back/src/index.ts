import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import peopleRouter from "./routes/people";
import filmsRouter from "./routes/films";
import statsRouter from "./routes/stats";
import { MONGO_URI, PORT } from "./config";

async function start() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/people", peopleRouter);
  app.use("/api/films", filmsRouter);
  app.use("/api/stats", statsRouter);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
