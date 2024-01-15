const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const autorSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true, required: true },
  surname: { type: String, trim: true, required: true },
  nationality: { type: String, required: true },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const Autor = mongoose.model("autor", autorSchema);
module.exports = Autor;
