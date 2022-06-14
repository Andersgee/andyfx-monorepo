import { Request, Response } from "express";
import { Reddit } from "./reddit";

const CLIENTID = process.env.REDDIT_CLIENTID || "";
const CLIENTSECRET = process.env.REDDIT_CLIENTSECRET || "";
const USERAGENT = process.env.REDDIT_USERAGENT || "";

const reddit = new Reddit({
  clientId: CLIENTID,
  clientSecret: CLIENTSECRET,
  userAgent: USERAGENT,
});

export async function getPath(req: Request, res: Response) {
  try {
    //req.params.path is everything before first slash
    //req.params[0] contains everything after first slash (including slash)
    const path = `/${req.params.path}${req.params[0]}`;
    const redditResponse = await reddit.fetch(path);
    return res.status(200).json(redditResponse);
  } catch (err) {
    return res.status(401).json({ message: "Something went wrong." });
  }
}
