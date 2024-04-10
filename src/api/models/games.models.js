const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const gameSchema = new mongoose.Schema({
  title: { type: String, unique: true, trim: true },
  img: { type: String, require: true },
  category: { type: String },
  votes: { type: Number, default: 0 },
  comment: { type: String, trim: true },
});

const Games = mongoose.model("games", gameSchema);
module.exports = Games;
