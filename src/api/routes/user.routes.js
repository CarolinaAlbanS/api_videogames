const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  authenticate,
  logout,
  getUsers,
  getUserId,
  updateUser,
  updateRestVotes,
} = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/", createUser);
userRouter.post("/authenticate", authenticate);
userRouter.post("/logout", [isAuth], logout);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserId);
userRouter.put("/:id", updateUser);
userRouter.put("/vote/:id", updateRestVotes);

module.exports = userRouter;
