import express, { Request, Response } from "express";
import cors from "cors";
import { hmm } from "./kek/apa";

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  //console.log(req.method, req.path, req.body);
  console.log(req.method, req.path);
  next();
});

app.get("/", async (req: Request, res: Response) => {
  res.json({ hello: `world ${hmm(8)}` });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
