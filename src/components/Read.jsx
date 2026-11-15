// Read.jsx
// Gets the list of movies from the Node/Express server and shows them.
import { useState, useEffect } from 'react';
import axios from 'axios'; // library for sending HTTP requests
import Movies from './Movies';

const Read = () => {
  // State to hold the movies data (starts as an empty array)
  const [movies1, setMovies] = useState([]);

  // useEffect with an empty [] runs once, when the component first loads
  useEffect(() => {
    axios
      // send a GET request to the back-end server to fetch the movies
      .get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data.movies);
        // the server sends { movies: [...] }, so we store response.data.movies
        setMovies(response.data.movies);
      })
      // catch any errors (e.g. the server is not running)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello read from the component</h1>
      {/* pass the movies array down to the Movies component as a prop */}
      <Movies mymovies={movies1} />
    </div>
  );
};

export default Read;
