import { Router } from "express";
import { getPath } from "#controllers/reddit";

const router = Router();

router.get("/:path*", getPath);

export default router;
