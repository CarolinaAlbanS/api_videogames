const Autor = require("../models/autor.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAutor = async (req, res, next) => {
  try {
    const autors = await Autor.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: autors,
    });
  } catch (error) {
    next(error);
  }
};

const createAutor = async (req, res, next) => {
  try {
    const escritor = new Autor(req.body);
    /* escritor.name = req.body.name;
    escritor.surname = req.body.surmane;
    escritor.nationality = req.body.nationality;*/

    //return res.json(req.body);
    if (await Autor.findOne({ name: req.body.name })) {
      return res.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
    await escritor.save();
    return res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteAutor = await Autor.findByIdAndDelete(id);
    if (!deleteAutor) {
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

const updateAutor = async (request, response, next) => {
  try {
    const id = request.params.id;
    const body = request.body;
    const autor = await Autor.findByIdAndUpdate(id, body, { new: true });
    if (!autor) {
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

module.exports = { getAutor, createAutor, deleteAutor, updateAutor };
