import { crearUsuario, updateUser } from "../model/UserModel.js";
import passport from "passport";

const register = async (req, res) => {
  const body = req.body;
  const { username, email, password } = body;
  console.log(req.body);
  try {
    const usuario = await crearUsuario({ username, email, password });
    res
      .status(201)
      .json({ regstro: true, message: "Usuario creado correctamente" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const login = passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/auth",
});

const getUser = async (req, res) => {
  res.status(200).json(req.user);
};

const modifieUser = async (req, res) => {
  const modifies = req.body;
  const userID = req.user._id;

  try {
    const modifieUser = await updateUser(userID, modifies);
    res.status().json(modifieUser);
  } catch (e) {
    res.status(400);
  }
};

export { register, login, getUser, modifieUser };
