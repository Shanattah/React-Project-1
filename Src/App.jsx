import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import MovieApi from "./Components/MovieAPI";
import MovieList from "./Components/MovieList";
import Movie from "./Components/Movie";
import ErrorBoundary from "./Components/ErrorBoundary";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Form setSearchQuery={setSearchQuery} />
        <MovieApi searchQuery={searchQuery} setMovies={setMovies} />
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No movies found.</p>
        )}
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
