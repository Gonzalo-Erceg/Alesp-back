import pkg from "mongoose";
const { Schema } = pkg;

export const donationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Asume que tienes un esquema de usuario
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: [1, "La cantidad mínima es 1"],
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
  receiptUrl: {
    type: String,
    default: "",
  },
});
