import { articleSchema } from "./schemas/articleSchema";

import pkg from "mongoose";
const { models, model } = pkg;

const ArticuloModel = models.Articulo || model("Articulo", articleSchema);

function crearArticulo() {}

function recuperarArticulo() {}

function crearComentario() {}

export { crearArticulo, recuperarArticulo, crearComentario };
