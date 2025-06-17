import { Router } from "express";
import { Stats } from "../models/Stats";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const stats = await Stats.findOne().sort({ updatedAt: -1 });
    if (!stats) {
      return res.status(404).json({ error: "No statistics computed yet" });
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
});

export default router;
