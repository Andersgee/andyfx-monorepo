import express, { Request, Response } from "express";
import cors from "cors";
//import fetch from "node-fetch";
import { oki } from "./folder1/oki";
import { oki2 } from "src/folder2/oki2";

//const kek = await fetch("https://www.google.com").then((res) => res.text());

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  //console.log(req.method, req.path, req.body);
  console.log(req.method, req.path);
  next();
});

//const kek = "kek";

app.get("/", async (req: Request, res: Response) => {
  res.json({ hello: `world ${oki2(8)}` });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
