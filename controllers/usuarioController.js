import { crearUsuario } from "../model/UserModel.js";
import passport from "passport";

const register = async (req, res) => {
  const body = req.body;
  const { username, email, password } = body;

  try {
    const usuario = await crearUsuario({ username, email, password });
    res
      .status(201)
      .json({ regstro: true, message: "Usuario creado correctamente" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export { register };
