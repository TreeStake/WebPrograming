const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());

let movies = [
   { id: 1, title: "Inception", duration: 148, imdbReviews: 2100000},
   { id: 2, title: "The Dark Knight", duration: 152, imdbReviews: 2500000},
   { id: 3, title: "Interstellar", duration: 169, imdbReviews: 1600000},
   { id: 4, title: "The Matrix", duration: 136, imdbReviews: 1700000},
   { id: 5, title: "The Shawshank Redemption", duration: 142, imdbReviews: 2700000},
   { id: 6, title: "Pulp Fiction", duration: 154, imdbReviews: 1900000},
   { id: 7, title: "Fight Club", duration: 139, imdbReviews: 1900000},
   { id: 8, title: "Forrest Gump", duration: 142, imdbReviews: 2000000},
   { id: 9, title: "The Godfather", duration: 175, imdbReviews: 1700000},
   { id: 10, title: "The Lord of the Rings", duration: 178, imdbReviews: 1700000}
];

app.get("/movies", (req, res) => {
   res.json(movies);
});

app.get("/movies/f", (req, res) => {
   const { search, sort } = req.query;

    let filteredFilms = movies;

    if (search) {
        filteredFilms = filteredFilms.filter(movie =>
            movie.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        );
    }

    if (sort === 'reviwes') {
      sortFilms = [...filteredFilms].sort((a, b) => a.imdbReviews - b.imdbReviews);
      return res.json(sortFilms)
    }

    res.json(filteredFilms)
});

app.post("/movies", (req, res) => {
   const { title, duration, imdbReviews } = req.body;
   const newMovie = {
      id: movies.length + 1,
      title,
      duration,
      imdbReviews,
   };
   movies.push(newMovie);
   res.status(201).json(newMovie);
});

app.put("/movies/:id", (req, res) => {
   const { id, title, duration, imdbReviews } = req.body;
   const movie = movies.find((m) => m.id === Number(id));
   if (!movie) return res.status(404).json({ message: "Movie not found" });

   movie.title = title;
   movie.duration = duration;
   movie.imdbReviews = imdbReviews;
});

app.delete("/movies/:id", (req, res) => {
   const { id } = req.params;
   const movieIndex = movies.findIndex((m) => m.id === Number(id));

   if (!movieIndex) return res.status(404).json({ message: "Movie not found" });

   movies.splice(movieIndex, 1);
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

