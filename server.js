import express from "express";
import "dotenv/config";
import usuarioRouter from "./routers/usuarioRouter.js";
import donationRouter from "./routers/donationRouter.js";
import aticleRouter from "./routers/articleRouter.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import { connect } from "./db/mongoConnet.js";
import * as handlePassport from "./utils/handlePassport.js";
import cors from "cors";
const app = express();
connect();
const PORT = process.env.PORT;
const MONGO_LOCAL = process.env.MONGO_URL;
const SECRET_SESSION = process.env.SECRET_SESSION;
app.use(
  session({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_LOCAL }),
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use("/user", usuarioRouter);
app.use("/donation", donationRouter);
app.use("/article", aticleRouter);

app.listen(PORT, () => {
  console.log("Apesita abierta");
});

export default app;
