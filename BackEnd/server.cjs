// BackEnd/server.cjs
// Node/Express back end for the movie app (Lab 6).
// The file ends in .cjs because the React app's package.json has "type": "module".
// The .cjs extension tells Node this file is CommonJS, so require() works.

// ---------- Imports ----------
const express = require('express');        // web framework used to build the API
const cors = require('cors');              // lets the React app (on another port) call this server
const bodyParser = require('body-parser'); // reads the body of incoming POST requests

const app = express(); // create the Express application
const port = 4000;     // the server runs on http://localhost:4000

// ---------- Middleware (runs before every route) ----------

// CORS: React runs on localhost:5173 and this server runs on localhost:4000.
// The browser blocks requests between different ports unless the server allows them.
app.use(cors());

// The same CORS rules set by hand, as given in the lab sheet.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); // pass the request on to the next middleware/route
});

// body-parser: turns the request body into a JavaScript object at req.body.
app.use(bodyParser.urlencoded({ extended: true })); // data sent from an HTML form
app.use(bodyParser.json());                           // JSON data (what axios sends)

// ---------- Routes ----------

// GET /  -> quick check that the server is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET /api/movies  -> send the list of movies as JSON (used by Read.jsx)
app.get('/api/movies', (req, res) => {
  const movies = {
    movies: [
      {
        Title: 'Avengers: Infinity War (server)',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
      },
      {
        Title: 'Captain America: Civil War (server)',
        Year: '2016',
        imdbID: 'tt3498820',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'
      },
      {
        Title: 'World War Z (server)',
        Year: '2013',
        imdbID: 'tt0816711',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
      }
    ]
  };

  res.json(movies); // send the object back as JSON
});

// POST /api/movies  -> receive a new movie from Create.jsx
app.post('/api/movies', (req, res) => {
  // req.body holds the movie object sent by axios.post (filled in by body-parser)
  console.log('Movie received:', req.body.title, req.body.year, req.body.poster);

  // res.send() takes only ONE argument, so the message is built as one string.
  res.send('Movie Added: ' + req.body.title);
});

// ---------- Start the server ----------
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
