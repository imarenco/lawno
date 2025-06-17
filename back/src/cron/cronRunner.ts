import mongoose from "mongoose";
import cron from "node-cron";
import { computeStats } from "./statsWorker";
import dotenv from "dotenv";
dotenv.config();

import { MONGO_URI } from "../config";

async function startCronJob() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Schedule task every 5 minutes
    cron.schedule("*/5 * * * *", async () => {
      console.log("⏰ Running scheduled stats job...");
      try {
        await computeStats();
        console.log("✅ Stats updated successfully");
      } catch (error) {
        console.error("❌ Error updating stats:", error);
      }
    });

    console.log("🚀 Cron job initialized");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB for cron:", error);
    process.exit(1);
  }
}

startCronJob();
