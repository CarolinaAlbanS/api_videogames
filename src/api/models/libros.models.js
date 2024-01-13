const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const bookSchema = new mongoose.Schema({
  title: { type: String, unique: true, trim: true, required: true },
  autor: { type: String, trim: true, required: true },
  year: { type: Number, required: true },
});

const Books = mongoose.model("book", bookSchema);
module.exports = Books;
