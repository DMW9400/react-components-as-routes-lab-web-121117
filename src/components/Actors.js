import React from 'react';
import { actors } from '../data';

//
// This component should render the text `Actors Page`, and make a new `<div>` for each actor. The `<div>` should contain the actor's name and an `<ul>` for each of their movies.



const Actors = () => {

  function renderMovies(actor){
    return(
      <ul>
        {actor.movies.map(movie => movie)}
      </ul>
    )
  }

  function renderActors() {
    return actors.map(actor =>
      <div>
        <h3>{actor.name}</h3>
        <p>Movies:</p>
        {renderMovies(actor)}
      </div>)
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
