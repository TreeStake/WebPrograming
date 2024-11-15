const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const movies = [
    {   id: 1,
        title: "Inception",
        duration: 148,
        imdbReviews: 2100000,
        price: 150,
        img: "inseption.jpg"},
    {   id: 2,
        title: "The Dark Knight",
        duration: 152,
        imdbReviews: 2500000,
        price: 220,
        img: "thedarknight.jpg"},
    {   id: 3,
        title: "Interstellar",
        duration: 169,
        imdbReviews: 1600000,
        price: 300,
        img: "interstellar.jpg"},
    {
        id: 4,
        title: "The Matrix",
        duration: 136,
        imdbReviews: 1700000,
        price: 180,
        img: "thematrix.jpg"},
    {
        id: 5,
        title: "The Shawshank Redemption",
        duration: 142,
        imdbReviews: 2700000,
        price: 250,
        img: "shawshank.jpg"},
    {
        id: 6,
        title: "Pulp Fiction",
        duration: 154,
        imdbReviews: 1900000,
        price: 210,
        img: "pulpfiction.jpg"},
    {
        id: 7,
        title: "Fight Club",
        duration: 139,
        imdbReviews: 1900000,
        price: 190,
        img: "fightclub.jpg"},
    {
        id: 8,
        title: "Forrest Gump",
        duration: 142,
        imdbReviews: 2000000,
        price: 240,
        img: "forrestgump.jpg"},
    {
        id: 9,
        title: "The Godfather",
        duration: 175,
        imdbReviews: 1700000,
        price: 280,
        img: "thegodfather.jpg"
    },
    {
        id: 10,
        title: "The Lord of the Rings",
        duration: 178,
        imdbReviews: 1700000,
        price: 300,
        img: "lordoftherings.jpg"}
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/sorted', (req, res) => {
    const { search, sort, filterPrice, filterViews } = req.query;

    let filteredFilms = [...movies];

    if (search) {
        filteredFilms = filteredFilms.filter(movie =>
            movie.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        );
    }

    if (sort === 'price') {
        filteredFilms = filteredFilms.sort((a, b) => a.price - b.price);
    } else if (sort === 'views') {
        filteredFilms = filteredFilms.sort((a, b) => b.imdbReviews - a.imdbReviews);
    } else if (sort === 'duration') {
        filteredFilms = filteredFilms.sort((a, b) => a.duration - b.duration);
    }

    if (filterPrice === 'up to 200'){
        filteredFilms = filteredFilms.filter((film) => film.price < 200)
    }
    else if (filterPrice === 'more then 200'){
        filteredFilms = filteredFilms.filter((film) => film.price >= 200)
    }

    if (filterViews === 'more then 2000000'){
        filteredFilms = filteredFilms.filter((film) => film.imdbReviews >= 2000000)
    }
    else if (filterViews === 'up to 2000000'){
        filteredFilms = filteredFilms.filter((film) => film.imdbReviews < 2000000)
    }

    res.json(filteredFilms)
});

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === Number(id));
  
    if (!movie) {
      return res.status(404).json({ error: 'Фільм не знайдено' });
    }
  
    res.json(movie);
  });

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
