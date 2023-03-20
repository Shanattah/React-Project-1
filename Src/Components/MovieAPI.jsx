import React, { useState, useEffect } from "react";
import { OMDB_API_KEY } from "../config";
import MovieList from "./MovieList";

const MovieApi = ({ searchQuery }) => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      console.log(data);
      setFetchedMovies(data.Search || []);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
      setFetchedMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : fetchedMovies.length > 0 ? (
        <MovieList movies={fetchedMovies} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieApi;
