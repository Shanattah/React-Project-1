import React, { useState, useEffect } from "react";

const Movie = ({ title, year, type, poster }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Movie;
