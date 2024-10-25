import pkg from "mongoose";
const { Schema } = pkg;

// Definimos el esquema para los comentarios
const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Definimos el esquema para los artículos
export const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  // Sección de comentarios (array de subdocumentos)
  comments: [commentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
