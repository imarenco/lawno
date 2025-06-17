export const PORT = process.env.PORT || 4000;
export const BASE_URL = "https://swapi.tech/api";
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/starwars_api";
export const STATS_CRON_SCHEDULE = "*/5 * * * *"; // every 5 minutes