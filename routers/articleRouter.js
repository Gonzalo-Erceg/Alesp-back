import express from "express";
import {
  recuperar,
  recuperarUno,
  addCommet,
} from "../controllers/articleController.js";

const router = express.Router();
router.get("/", recuperar);
router.get("/:id", recuperarUno);
router.post("/:id", addCommet);
export default router;
