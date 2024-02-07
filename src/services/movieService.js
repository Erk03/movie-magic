const Movie = require("../models/movie");

exports.getAll = () => {
  const movies = Movie.find();
  return movies;
};

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => Movie.findById(movieId).populate("casts");

//TODO: filter result in mongodb
exports.search = async (title, genre, year) => {
  let result = await Movie.find().lean();

  if (title) {
    result = result.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (genre) {
    result = result.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (year) {
    result = result.filter((movie) => movie.year === year);
  }

  return result;
};

exports.attach = async (movieId, castId) => {
  const movie = await this.getOne(movieId);

  //TODO: validate castsid if exist
  movie.casts.push(castId);

  return movie.save();
};
