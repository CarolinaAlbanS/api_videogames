const express = require("express");
const autorRoutes = express.Router();
const {
  getAutor,
  createAutor,
  deleteAutor,
  updateAutor,
} = require("../controllers/autor.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

autorRoutes.get("/", getAutor);
autorRoutes.post("/", createAutor);
autorRoutes.put("/:id", updateAutor);
autorRoutes.delete("/", deleteAutor);

module.exports = autorRoutes;
