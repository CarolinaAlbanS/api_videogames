const Games = require("../models/games.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getGames = async (req, res, next) => {
  try {
    const games = await Games.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: games,
    });
  } catch (error) {
    next(error);
  }
};

const getGamesId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const games = await Games.findById(id);
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: games,
    });
  } catch (error) {
    next(error);
  }
};

const createGames = async (req, res, next) => {
  try {
    const games = new Games(req.body);

    if (await Games.findOne({ title: req.body.title })) {
      return res.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
    const createGame = await games.save();
    return res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: createGame,
    });
  } catch (error) {
    next(error);
  }
};

const deleteGames = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteGames = await Games.findByIdAndDelete(id);
    if (!deleteGames) {
      return res.status(404).json({
        status: 404,
        messagee: HTTPSTATUSCODE[404],
        data: borrado,
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
    });
  } catch (error) {
    next(error);
  }
};

const updateGames = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const game = await Games.findByIdAndUpdate(id, body, { new: true });
    if (!game) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
const updateVoteGames = async (req, res, next) => {
  try {
    const id = req.params.id;
    const game = await Games.findByIdAndUpdate(
      id,
      { $inc: { votes: 1 } },
      { new: true }
    );
    if (!game) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGames,
  getGamesId,
  createGames,
  deleteGames,
  updateGames,
  updateVoteGames,
};
