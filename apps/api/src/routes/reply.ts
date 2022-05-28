import { Router } from "express";
import cors from "cors";
import * as reply from "#controllers/reply";
import authUser from "#middleware/authUser";

const router = Router();

const ALLOWED_ORIGINS = [
  "http://localhost:3002", //SIDEPROJECTS_URL_LOCAL
  "https://web.andyfx.se", //SIDEPROJECTS_URL
];

router.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);

router.get("/:id", reply.read);
router.post("/:postId", authUser, reply.create);
router.patch("/:id", authUser, reply.update);
router.delete("/:id", authUser, reply.remove);

export default router;
