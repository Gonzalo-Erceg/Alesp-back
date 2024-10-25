import { Strategy } from "passport-local";
import {
  obtenerUsuarioPorEmail,
  obtenerUsuarioPorId,
  revisarPassword,
} from "../model/UserModel.js";
import passport from "passport";

const fieldEstragia = { usernameField: "email" };

const comprobacionUsuario = async (email, password, done) => {
  try {
    const usuario = await obtenerUsuarioPorEmail(email);

    if (!usuario) {
      return done(null, false, { mensaje: "Usuario no encontrado." });
    }

    const passwordCorrecto = await revisarPassword(usuario, password);
    console.log(passwordCorrecto);

    if (!passwordCorrecto) {
      return done(null, false, { mensaje: "No coincide el password" });
    }

    return done(null, usuario);
  } catch (error) {
    console.log("[comprobacionUsuario]", error);
  }
};

const estrategiaLocal = new Strategy(fieldEstragia, comprobacionUsuario);

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  const usuario = await obtenerUsuarioPorId(id);
  done(null, usuario);
});

export default passport.use(estrategiaLocal);
