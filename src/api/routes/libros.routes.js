const express = require("express");
const librosRoutes = express.Router();
const {
  getLibros,
  getLibroId,
  createlibros,
  deletelibros,
  updatelibros,
} = require("../controllers/libros.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

librosRoutes.get("/", getLibros);
librosRoutes.get("/:id", getLibroId);
librosRoutes.post("/",  createlibros);
librosRoutes.put("/:id", updatelibros);
librosRoutes.delete("/:id", deletelibros);

module.exports = librosRoutes;
