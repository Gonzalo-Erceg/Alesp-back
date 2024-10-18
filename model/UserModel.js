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
    console.log(user.password);
    user.password = await user.encriptarPassword(usuario.password);

    await user.save();
    return;
  } catch (e) {
    console.log(e.errmsg);
    throw new Error(e.errmsg);
  }
};

export { crearUsuario };
