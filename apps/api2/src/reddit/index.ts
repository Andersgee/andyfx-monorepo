import express, { Request, Response } from "express";
import cors from "cors";
import { Reddit } from "./reddit";

const router = express.Router();
export default router;

const ALLOWED_ORIGINS = [
  "http://localhost:3002", //SIDEPROJECTS_URL_LOCAL
  "https://web.andyfx.se", //SIDEPROJECTS_URL
];

const CLIENTID = process.env.REDDIT_CLIENTID || "";
const CLIENTSECRET = process.env.REDDIT_CLIENTSECRET || "";
const USERAGENT = process.env.REDDIT_USERAGENT || "";

const reddit = new Reddit({
  clientId: CLIENTID,
  clientSecret: CLIENTSECRET,
  userAgent: USERAGENT,
});

router.use(
  cors({
    origin: ALLOWED_ORIGINS,
  })
);

//router.use(cors());

router.get("/:path*", async (req: Request, res: Response) => {
  //star allow slashes in path.
  //req.params.path is everything before first slash
  //req.params[0] contains everything after first slash (including slash)
  const path = `/${req.params.path}${req.params[0]}`;

  try {
    const r = await reddit.fetch(path);
    //console.log("r:", r);
    return res.status(200).json(r);
  } catch (err) {
    return res.status(401);
  }
});
