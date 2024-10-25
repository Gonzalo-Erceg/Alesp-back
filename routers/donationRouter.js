import express from "express";
const router = express.Router();
import {
  isAuthenticated,
  isAuthenticatedAdmin,
} from "../middlewares/authenticated.js";
import {
  getUserDonation,
  createDonation,
  AllDonations,
} from "../controllers/donationsController.js";

router.get("/", isAuthenticated, getUserDonation);
router.post("/", isAuthenticated, createDonation);
router.get("/all", isAuthenticatedAdmin, AllDonations);
export default router;
