import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuariosEsquema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    voluntari: {
      type: Boolean,
      default: false,
    },
    dni: {
      type: Number,
      unique: true,
    },
    address: {
      type: String,
    },
    tel: {
      type: Number,
    },
    fNacimiento: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

usuariosEsquema.methods.encriptarPassword = async (password) => {
  console.log(password);
  try {
    const salt = await bcrypt.genSalt(7);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }
};

usuariosEsquema.methods.comprobarPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default usuariosEsquema;
