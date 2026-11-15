// MovieItems.jsx
// Shows the details of ONE movie: title, year and poster image.
export default function MovieItems(props) {
  return (
    <div>
      <h3>{props.mymovie.Title}</h3>
      <p>{props.mymovie.Year}</p>
      {/* the alt text is shown if the image cannot load */}
      <img src={props.mymovie.Poster} alt={props.mymovie.Title}></img>
    </div>
  )
}
