import mongoose, { Schema, Document } from "mongoose";

export interface IQueryLog extends Document {
  endpoint: string;
  queryString: string;
  timestamp: Date;
  durationMs: number;
}

const QueryLogSchema = new Schema<IQueryLog>({
  endpoint: { type: String, required: true },
  queryString: { type: String, required: true },
  timestamp: { type: Date, required: true, default: () => new Date() },
  durationMs: { type: Number, required: true },
});

export const QueryLog = mongoose.model<IQueryLog>("QueryLog", QueryLogSchema);