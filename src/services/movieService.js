const Movie = require("../models/movie");

exports.getAll = () => {
  const movies = Movie.find();
  return movies;
};

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => Movie.findById(movieId).populate("casts");

//TODO: filter result in mongodb
exports.search = (title, genre, year) => {
  let query = {};

  if (title) {
    query.title = new RegExp(title, "i");
  }

  if (genre) {
    query.genre = genre.toLowerCase();
  }

  if (year) {
    query.year = year;
  }

  return Movie.find(query);
};

exports.attach = async (movieId, castId) => {
  const movie = await this.getOne(movieId);

  //TODO: validate castsid if exist
  movie.casts.push(castId);

  return movie.save();
};
