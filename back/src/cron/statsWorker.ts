import { QueryLog } from "../models/QueryLog";
import { Stats } from "../models/Stats";

export async function computeStats() {
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

  const logs = await QueryLog.find({ timestamp: { $gte: fiveMinutesAgo } });
  if (logs.length === 0) {
    console.log("No logs found in the last 5 minutes");
    return;
  }

  const countByQuery = logs.reduce((acc, log) => {
    const key = `${log.endpoint}|${log.queryString}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const averageDuration =
    logs.reduce((sum, log) => sum + (log.durationMs || 0), 0) /
    (logs.length || 1);

  const minuteCounts = logs.reduce((acc, log) => {
    const minute = new Date(log.timestamp).getMinutes();
    acc[minute] = (acc[minute] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const mostPopularMinute = Object.entries(minuteCounts).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];

  await Stats.insertOne({
    topEndpoints: Object.entries(countByQuery)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([query, count]) => ({ query, count })),
    averageDuration,
    mostPopularMinute: Number(mostPopularMinute),
    updatedAt: new Date(),
  });
}
