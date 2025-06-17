import { Router } from "express";
import axios from "axios";
import { recordQuery } from "../middlewares/recordQuery";
import { BASE_URL } from "../config";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { search = "" } = req.query;
    const url = search
      ? `${BASE_URL}/films/?title=${encodeURIComponent(search as string)}`
      : `${BASE_URL}/films`;

    const data = await recordQuery(
      "/api/films",
      search as string,
      async () => (await axios.get(url)).data
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch films" });
  }
});

// Detail of a film
router.get("/:id", async (req, res) => {
  try {
    const film = await recordQuery(
      `/api/films/${req.params.id}`,
      req.params.id,
      async () => {
        const filmRes = await axios.get(`${BASE_URL}/films/${req.params.id}`);
        const film = filmRes.data.result;
        const characterUrls: string[] = film.properties.characters || [];

        // Fetch all character details concurrently
        const characterPromises = characterUrls.map((url) =>
          axios.get(url).then((res) => res.data.result)
        );
        const characters = await Promise.all(characterPromises);

        // Replace character URLs with full character data
        film.properties.characters = characters;

        return {
          result: film,
        };
      }
    );

    res.json(film);
  } catch (error) {
    console.error("Failed to fetch film detail with characters:", error);
    res.status(500).json({ error: "Failed to fetch film detail" });
  }
});

export default router;
