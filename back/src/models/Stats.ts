import mongoose, { Schema, Document } from "mongoose";

interface TopQueries {
  query: string;
  count: number;
}

export interface IStats extends Document {
  topEndpoints: TopQueries[];
  averageDuration: number;
  mostPopularMinute: number;
  updatedAt: Date;
}

const TopQueriesSchema = new Schema<TopQueries>({
  query: String,
  count: Number,
});

const StatsSchema = new Schema<IStats>({
  topEndpoints: { type: [TopQueriesSchema], required: true },
  averageDuration: { type: Number, required: true },
  mostPopularMinute: { type: Number, required: true },
  updatedAt: { type: Date, required: true, default: () => new Date() },
});

export const Stats = mongoose.model<IStats>("Stats", StatsSchema);
