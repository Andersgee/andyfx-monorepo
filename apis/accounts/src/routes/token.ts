import { Router } from "express";
import authUser from "#src/middleware/authUser";
import * as token from "#controllers/token";

const router = Router();

router.get("/", token.generateAccessToken);
router.get("/refresh", authUser, token.generateRefreshToken);
router.delete("/refresh", authUser, token.revokeRefreshToken);

export default router;
