import { Router } from "express";
import { PeopleController } from "../controllers/peopleController";

const router = Router();
const peopleController = new PeopleController();

router.get("/", peopleController.search.bind(peopleController));
router.get("/:id", peopleController.getById.bind(peopleController));

export default router;
