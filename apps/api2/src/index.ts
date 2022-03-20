import "dotenv-flow/config";
import express from "express";
import reddit from "./reddit";
import openweathermap from "./openweathermap";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
});

app.use("/reddit", reddit);
app.use("/openweathermap", openweathermap);

/*
app.get("/", async (req, res) => {
  res.json({ hello: "world" });
});
*/

const PORT = parseInt(process.env.PORT || "4000", 10);
app.listen(PORT, () => {
  console.log(`ready - started server on 0.0.0.0:${PORT}, url: http://localhost:${PORT}`);
});
