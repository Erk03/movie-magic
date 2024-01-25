const movies = [{
_id: 1, 
title: 'Fast and furious',
genre: 'car',
director: 'erkan Rasim',
date: '12.11.21',
imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',
rating: '5',
description: 'mnogo gotin film'}];

exports.getAll = () => {
    return movies.slice();
}

exports.create = (movieData) => {
    
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
}    