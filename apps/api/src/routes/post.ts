import { Router } from "express";
import cors from "cors";
import * as post from "#controllers/post";
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

router.get("/:id", post.read);
router.post("/", authUser, post.create);
router.patch("/:id", authUser, post.update);
router.delete("/:id", authUser, post.remove);

router.get("/profile/:id", post.readWall);

//router.get("/wall/:id", post.readWall);

export default router;
