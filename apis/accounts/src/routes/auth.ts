import { Router } from "express";
import * as auth from "#controllers/auth";

const router = Router();

router.post("/", auth.login);
router.delete("/", auth.logout);
router.post("/google", auth.google);
router.post("/signup", auth.signup);

export default router;
