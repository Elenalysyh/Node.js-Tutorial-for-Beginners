var movies = require ("./movies");

var buckysMovies = movies();
buckysMovies.favMovies = "Some film";
console.log( "Bucky's favorite movie is:" + buckysMovies.favMovies );
