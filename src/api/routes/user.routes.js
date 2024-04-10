const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  authenticate,
  logout,
  getUsers,
  updateUser,
} = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/", createUser);
userRouter.post("/authenticate", authenticate);
userRouter.post("/logout", [isAuth], logout);
userRouter.get("/", getUsers);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
