import { Router } from "express";
import * as post from "#controllers/post";
import authUser from "#middleware/authUser";

const router = Router();

router.get("/:id", post.read);
router.post("/", authUser, post.create);
router.patch("/:id", authUser, post.update);
router.delete("/:id", authUser, post.remove);

router.get("/profile/:id", post.readWall);

//router.get("/wall/:id", post.readWall);

export default router;
