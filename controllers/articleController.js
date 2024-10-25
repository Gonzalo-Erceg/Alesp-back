import {
  crearComentario,
  recuperarArticulos,
  recuperarUnArticulo,
} from "../model/articleModel.js";

const addCommet = async (req, res) => {
  const user = req.user;
  const articleID = req.params.id;
  const comment = req.body.comment;

  try {
    const comentario = await crearComentario(articleID, user, comment);
    if (comentario.create) {
      res.status(201).json({ message: comentario.message });
    } else {
      res.stauts(400);
    }
  } catch (e) {
    res.status(400);
  }
};

const recuperar = async (req, res) => {
  try {
    const articulos = await recuperarArticulos();

    res.status(200).json({ articulos: articulos });
  } catch (e) {
    res.status(400);
  }
};

const recuperarUno = async (req, res) => {
  const articleID = req.params.id;
  try {
    const articulo = await recuperarUnArticulo(articleID);
    res.status(200).json(articulo);
  } catch (e) {
    res.status(400).json({ message: "no se pudo recuperar el articulo" });
  }
};

export { recuperar, addCommet, recuperarUno };
