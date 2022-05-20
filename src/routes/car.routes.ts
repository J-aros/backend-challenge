import { Router } from "express";
const router = Router();

import { getCars } from "../controllers/car.controller";
router.get("/", getCars);

export default router;
