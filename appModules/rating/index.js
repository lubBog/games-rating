const makeRatingFile = require("./rating-file");
const config = require("./config");
const { createRating, updateRating } = require("./calculation");

module.exports = {
  makeRatingFile,
  config,
  createRating,
  updateRating,
};