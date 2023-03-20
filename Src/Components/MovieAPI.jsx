import React from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieApi = () => {
  const [movies, setMovies] = React.useState([]);

  const fetchMovieApi = async () => {
    try {
      const response = await fetch('"https://www.omdbapi.com/?apikey=baad570d"');
      const posts = await response.json();
      console.log(posts);
      setPosts(posts)
    } catch(error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div>
     <MovieList />
     <Form />
      
    </div>
  )
}

export default MovieApi
