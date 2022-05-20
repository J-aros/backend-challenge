import { Router } from "express";
import {
  getCars,
  createCar,
  deleteCar,
  getCar,
  updateCar,
} from "../controllers/car.controller";

const router = Router();

router.get("/", getCars);
router.get("/:id", getCar);
router.post("/", createCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

export default router;
