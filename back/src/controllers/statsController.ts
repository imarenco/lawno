import { Request, Response } from 'express';
import { Stats } from '../models/Stats';

export class StatsController {
  async getLatestStats(req: Request, res: Response) {
    try {
      const stats = await Stats.findOne().sort({ updatedAt: -1 });
      if (!stats) {
        return res.status(404).json({ error: "No statistics computed yet" });
      }
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch statistics" });
    }
  }
} 