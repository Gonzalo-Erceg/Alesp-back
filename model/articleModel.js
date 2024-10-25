import { articleSchema } from "./schemas/articleSchema.js";

import pkg from "mongoose";
const { models, model } = pkg;

const ArticuloModel = models.Articulo || model("Articulo", articleSchema);

async function recuperarArticulos() {
  try {
    const articulos = await ArticuloModel.find();

    return articulos;
  } catch (e) {
    throw e;
  }
}
async function recuperarUnArticulo(articleID) {
  try {
    const articulos = await ArticuloModel.findById(articleID)
      .populate({ path: "comments.user", model: "User", select: "username" })
      .exec();

    return articulos;
  } catch (e) {
    throw e;
  }
}
async function crearComentario(articleID, userID, comment) {
  try {
    const articulo = await ArticuloModel.findById(articleID);
    if (!articulo) {
      throw new Error("Artículo no encontrado");
    }

    articulo.comments.push({ user: userID, content: comment });
    await articulo.save();

    return { message: "creado", create: true };
  } catch (e) {
    throw e;
  }
}

export { recuperarArticulos, crearComentario, recuperarUnArticulo };
