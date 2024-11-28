import {
  getUserDonations,
  getAllDonations,
  createDonations,
} from "../model/donarionModel.js";

const getUserDonation = async (req, res) => {
  const userID = req.user.id;

  try {
    const donaciones = await getUserDonations(userID);
    res.json(donaciones);
  } catch (e) {
    res.status(400);
  }
};

const createDonation = async (req, res) => {
  const userID = req.user.id;
  const amount = req.body.amount;
console.log(req.body)
  try {
    const newDonation = createDonations(userID, amount);

    if (newDonation) {
      res.status(201).json({ message: "donacion creada" });
    } else {
      res.stauts(500);
    }
  } catch (e) {
    res.stauts(500);
  }
};

const AllDonations = async (req, res) => {
  try {
    const donations = await getAllDonations();
    res.status(200).json(donations);
  } catch (e) {
    res.status(404).json({ message: "not found" });
  }
};

export { getUserDonation, createDonation, AllDonations };
