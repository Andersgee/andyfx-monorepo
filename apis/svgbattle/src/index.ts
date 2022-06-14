import "dotenv-flow/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { mongooseConnection } from "./mongodb";
import consoleLogRequest from "#middleware/consoleLogRequest";
import target from "#routes/target";

const { PORT, ANDYFX_COOKIE_SECRET, URL_MONGODB, NODE_ENV } = process.env;

const app = express();

const ALLOWED_ORIGINS = ["http://localhost:3001", "https://svgbattle.andyfx.net"];

app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser(ANDYFX_COOKIE_SECRET));
app.use(consoleLogRequest);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "ok" });
});

app.use("/target", target);

await mongooseConnection(URL_MONGODB);

app.listen(PORT, () => console.log(`ready - started server on 0.0.0.0:${PORT}, url: http://localhost:${PORT}`));
