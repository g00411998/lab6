// Create.jsx
// A form for adding a new movie. When the form is submitted, the movie
// is sent to the Node/Express server with a POST request.
import { useState } from "react";
import axios from "axios"; // library for sending HTTP requests

function Create() {
  // One piece of state for each form field (updated as the user types)
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");

  // Runs when the user clicks "Add Movie"
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page

    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);

    // Put the form values into one object to send to the server
    const movie = {
      title: title,
      year: year,
      poster: poster
    };

    // Send the movie to the server.
    // This call must be INSIDE handleSubmit. Outside it, a POST would be sent
    // every time the component re-renders (on every key press).
    // Note: the lab sheet says port 3000, but our server runs on port 4000.
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data)) // the server's reply, e.g. "Movie Added: ..."
      .catch((err) => console.log(err));    // log the whole error (err.data does not exist)
  };

  return (
    <div>
      <h2>This is my Create Component.</h2>

      {/* onSubmit calls handleSubmit when the form is submitted */}
      <form onSubmit={handleSubmit}>
        {/* Movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        {/* Movie year */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        {/* Movie poster (image URL) */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>

        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
