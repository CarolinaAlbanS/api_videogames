const express = require("express");
const librosRoutes = express.Router();
const {
  getLibros,
  createlibros,
  deletelibros,
} = require("../controllers/libros.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

librosRoutes.get("/", getLibros);
librosRoutes.post("/", createlibros);
librosRoutes.delete("/", deletelibros);

module.exports = librosRoutes;
