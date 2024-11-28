import { donationSchema } from "./schemas/donationSchema.js";
import pkg from "mongoose";
const { model, models } = pkg;

const DonationModel = models.Donation || model("Donation", donationSchema);

const getAllDonations = async () => {
  try {
    const donations = await DonationModel.find()
      .populate("user", "name")
      .exec();
    return donations;
  } catch (e) {
    throw e;
  }
};

const createDonations = async (userID, amount) => {
  try {
    const donation = new DonationModel({ user: userID, amount: amount });

    donation.save();
    return true;
  } catch (e) {
    throw e;
  }
};

const getUserDonations = async (userID) => {
  try {
    const donations = await DonationModel.find({ user: userID });
    console.log(donations)
    return donations;
  } catch (e) {
    throw e;
  }
};

export { createDonations, getAllDonations, getUserDonations };
