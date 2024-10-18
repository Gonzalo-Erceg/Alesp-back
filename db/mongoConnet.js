import mongoose from "mongoose";

export const connect = () => {
  const url = process.env.MONGO_URL;
  mongoose
    .connect(url)
    .then(() => console.log("Conexión a MongoDB exitosa"))
    .catch((error) => console.error("Error al conectar a MongoDB:", error));
};
