const express = require("express");
const gamesRoutes = express.Router();
const {
  getGames,
  getGamesId,
  createGames,
  deleteGames,
  updateGames,
} = require("../controllers/games.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

gamesRoutes.get("/", getGames);
gamesRoutes.get("/:id", getGamesId);
gamesRoutes.post("/", createGames);
gamesRoutes.put("/:id", updateGames);
gamesRoutes.delete("/:id", deleteGames);

module.exports = gamesRoutes;
