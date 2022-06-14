import { Router } from "express";
import * as reply from "#controllers/reply";
import authUser from "#middleware/authUser";

const router = Router();

router.get("/:id", reply.read);
router.post("/:postId", authUser, reply.create);
router.patch("/:id", authUser, reply.update);
router.delete("/:id", authUser, reply.remove);

export default router;
