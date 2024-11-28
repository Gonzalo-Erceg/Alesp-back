import usuariosEsquema from "./schemas/UserSchema.js";
import pkg from "mongoose";
const { models, model } = pkg;
const UserModel = models.User || model("User", usuariosEsquema);

const crearUsuario = async (usuario) => {
  try {
    const user = new UserModel({
      username: usuario.username,
      email: usuario.email,
      password: usuario.password,
    });
    console.log(usuario.password);
    user.password = await user.encriptarPassword(usuario.password);

    await user.save();
    return;
  } catch (e) {
    console.log(e.errmsg);
    throw new Error(e.errmsg);
  }
};

const obtenerUsuarioPorEmail = async (email) => {
  try {
    const usuario = await UserModel.findOne({ email });

    return usuario;
  } catch (e) {
    throw e;
  }
};

const obtenerUsuarioPorId = async (id) => {
  try {
    const user = await UserModel.findById(id).select("-password");
    return user;
  } catch (error) {
    throw error;
  }
};
const revisarPassword = async (usuario, password) => {
  try {
    const isMatch = await usuario.comprobarPassword(password);
    console.log(isMatch);
    return isMatch;
  } catch (error) {
    console.log("[revisarPassword]", error);
  }
};
const updateUser = async (userID, modifie) => {
  console.log("hola")

  try {
    const user = await UserModel.findByIdAndUpdate(userID, { $set: modifie });
    return { message: user };
  } catch (e) {
    return { message: "error al intentar modificar el usuario" };
  }
};
export {
  crearUsuario,
  obtenerUsuarioPorEmail,
  obtenerUsuarioPorId,
  revisarPassword,
  updateUser,
};
