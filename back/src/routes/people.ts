import { Router } from "express";
import axios from "axios";
import { recordQuery } from "../middlewares/recordQuery";
import { BASE_URL } from "../config";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { page = "1", search = "" } = req.query;
    const url = search
      ? `${BASE_URL}/people/?name=${encodeURIComponent(search as string)}`
      : `${BASE_URL}/people?page=${page}&limit=10`;

    const data = await recordQuery(
      "/api/people",
      search as string,
      async () => (await axios.get(url)).data
    );

    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch people" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const data = await recordQuery(`/api/people/${id}`, id, async () => {
      const personRes = await axios.get(`${BASE_URL}/people/${id}`);
      const personData = personRes.data.result;
      const filmUrls: string[] = personData.properties.films || [];

      const films = await Promise.all(
        filmUrls.map(async (url) => (await axios.get(url)).data.result)
      );

      return { person: personData, films };
    });

    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch person detail" });
  }
});

export default router;
