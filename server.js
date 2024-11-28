import express from "express";
import "dotenv/config";
import usuarioRouter from "./routers/usuarioRouter.js";
import donationRouter from "./routers/donationRouter.js";
import aticleRouter from "./routers/articleRouter.js";

import cookie from "cookie-parser";

import { connect } from "./db/mongoConnet.js";

import cors from "cors";
const app = express();
connect();
const PORT = process.env.PORT;

const SECRET_SESSION = process.env.SECRET_SESSION;

app.use(cors({ origin: "*", credentials: true }));
app.use(cookie());
app.use(express.json());
app.use("/user", usuarioRouter);
app.use("/donation", donationRouter);
app.use("/article", aticleRouter);

app.listen(PORT, () => {
  console.log("Apesita abierta");
});

export default app;
