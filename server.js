import express from "express";
import "dotenv/config";
import usuarioRouter from "./routers/usuarioRouter.js";
import articleRouter from "./routers/articleRouter.js";
import { connect } from "./db/mongoConnet.js";

const app = express();
connect();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/user", usuarioRouter);
app.use("/article", articleRouter);
app.listen(PORT, () => {
  console.log("Apesita abierta");
});
