// Movies.jsx
// Receives the array of movies as a prop and shows one MovieItems per movie.
import MovieItems from "./MovieItems";

export default function Movies(props) {
  // map() loops over the array and returns a MovieItems component for each movie.
  // key={movie.imdbID} gives each item a unique id so React can keep track of it.
  return props.mymovies.map(
    (movie) => {
      return <MovieItems mymovie={movie} key={movie.imdbID}></MovieItems>
    }
  )
}
