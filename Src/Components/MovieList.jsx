import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
};

export default MovieList;
