const Movie = require("../models/movie");

exports.getAll = () => {
  const movies = Movie.find();
  return movies;
};

exports.create = (movieData) => Movie.create(movieData);

exports.getOne = (movieId) => Movie.findById(movieId);

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
