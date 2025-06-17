import { Router } from "express";
import { FilmsController } from "../controllers/filmsController";

const router = Router();
const filmsController = new FilmsController();

router.get("/", filmsController.search.bind(filmsController));
router.get("/:id", filmsController.getById.bind(filmsController));

export default router;
