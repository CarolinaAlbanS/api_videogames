const Book = require("../models/libros.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getLibros = async (req, res, next) => {
  try {
    const books = await Book.find();
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
    const book = new Book(req.body);
    // book.id = req.body.id;
    // book.img = req.body.img;
    // book.title = req.body.title;
    // book.autor = req.body.autor;
    // book.year = req.body.year;

    if (await Book.findOne({ title: req.body.title })) {
      return res.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
    const createBook = await book.save();
    return res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: createBook,
    });
  } catch (error) {
    next(error);
  }
};

const deletelibros = async (req, res) => {
  try {
    const { id } = req.params;
    const deletelibros = await Book.findByIdAndDelete(id);
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

const updatelibros = async (request, response, next) => {
  try {
    const id = request.params.id;
    const body = request.body;
    const libro = await Book.findByIdAndUpdate(id, body, { new: true });
    if (!libro) {
      return response.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    response.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLibros, createlibros, deletelibros, updatelibros };
