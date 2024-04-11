const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true, required: true },
  email: { type: String, unique: true, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  role: { type: String, trim: true, default: "user" },
  votes: { type: Number, default: 5 },
});

userSchema.pre("save", (next) => {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;
