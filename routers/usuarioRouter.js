import express from "express";
import {
  register,
  login,
  getUser,
  modifieUser,
} from "../controllers/usuarioController.js";
import { isAuthenticated } from "../middlewares/authenticated.js";
const router = express.Router();

router.get("/", isAuthenticated, getUser);
router.post("/register", register);
router.post("/login", login);
router.patch("/", isAuthenticated, modifieUser);

router.get("/dashboard", (req, res) => {
  res.status(200).json({ loginStatus: true });
});
export default router;
