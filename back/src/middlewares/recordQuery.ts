import { QueryLog } from "../models/QueryLog";

export async function recordQuery<T>(
  endpoint: string,
  queryString: string,
  handler: () => Promise<T>
): Promise<T> {
  const start = Date.now();
  const result = await handler();
  const durationMs = Date.now() - start;

  try {
    await QueryLog.create({
      endpoint,
      queryString,
      timestamp: new Date(),
      durationMs,
    });
  } catch (error) {
    console.error("Failed to record query log:", error);
  }

  return result;
}
