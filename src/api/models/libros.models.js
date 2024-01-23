const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const bookSchema = new mongoose.Schema({
  
    id:{ type: String },
    img:{ type: String, require:true},
    title:{ type: String, unique: true, trim: true},
    autor: { type: String, trim: true },
    year: { type: Number},
    genre:{ type: String},
});

const Book = mongoose.model("book", bookSchema);
module.exports = Book;
