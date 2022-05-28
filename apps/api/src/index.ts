import "dotenv-flow/config";
import express from "express";
import cookieParser from "cookie-parser";
import { mongooseConnection } from "./mongodb";
import consoleLogRequest from "#middleware/consoleLogRequest";
import auth from "#routes/auth";
import token from "#routes/token";
import user from "#routes/user";
import post from "#routes/post";
import reply from "#routes/reply";
import reddit from "#routes/reddit";
import openweathermap from "#routes/openweathermap";

const { PORT, ANDYFX_COOKIE_SECRET, URL_MONGODB, NODE_ENV } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser(ANDYFX_COOKIE_SECRET));
app.use(consoleLogRequest);

app.use("/auth", auth);
app.use("/token", token);

app.use("/user", user);
app.use("/post", post);
app.use("/reply", reply);

app.use("/reddit", reddit);
app.use("/openweathermap", openweathermap);

await mongooseConnection(URL_MONGODB);

app.listen(PORT, () => console.log(`ready - started server on 0.0.0.0:${PORT}, url: http://localhost:${PORT}`));
