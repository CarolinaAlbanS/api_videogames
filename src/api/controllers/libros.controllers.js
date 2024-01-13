const { json } = require("express");
const Books = require("../models/libros.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getLibros = async (req, res, next) => {
  try {
    const books = await Books.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

const createlibros = async (req, res, next) => {
  try {
    const book = new Books();
    book.title = req.body.title;
    book.autor = req.body.autor;
    book.year = req.body.year;
    if (await Books.findOne({ title: req.body.title })) {
      return res.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
    await book.save();
    return res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

const deletelibros = async (req, res) => {
  try {
    const { id } = req.params;
    const deletelibros = await Books.findByIdAndDelete(id);
    if (!deletelibros) {
      return res.status(404).json({
        status: 404,
        messagee: HTTPSTATUSCODE[404],
        data: null,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getLibros, createlibros, deletelibros };
