import React from 'react';
import { movies } from '../data';

//This component should render the text `Movies Page`, and make a new `<div>` for each movie. The `<div>` should contain the movie's title, time and an `<ul>` for each genre.

const Movies = () => {

  function renderMovieGenres(movie){
    return(
      <ul>
        {movie.genres.map(genre => genre)}
      </ul>
    )
  }

  function renderMovies(){
    return movies.map(movie =>
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        {renderMovieGenres(movie)}
      </div>)
  }


  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
