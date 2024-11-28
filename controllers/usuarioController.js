import {
  crearUsuario,
  updateUser,
  obtenerUsuarioPorEmail,
  revisarPassword,
  obtenerUsuarioPorId
} from "../model/UserModel.js";
import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET_SESSION;
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

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await obtenerUsuarioPorEmail(email);
    const check = await revisarPassword(usuario, password);
    if (check) {
      const token = jwt.sign({ id: usuario._id, role: "user" }, SECRET);

      res.json({ success: true, token });
    }
  } catch (e) {
    res.status(404).json({ message: "Error, intente mas tarde" });
  }
};

const getUser = async (req, res) => {
  const userID = req.user.id

  try{
    const user = await obtenerUsuarioPorId(userID)

    res.json({user})
  }catch(e){
    res.status(404).json({message:e.message})
  }
};

const modifieUser = async (req, res) => {
  const modifies = req.body;
  const userID = req.user._id;

  try {
    const modifieUser = await updateUser(userID, modifies);
    console.log(modifieUser)
    res.status().json(modifieUser);
  } catch (e) {
    res.status(400);
  }
};

export { register, login, getUser, modifieUser };
