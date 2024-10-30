import React, { createContext, useContext } from 'react';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const movies = [
    {
        id: 1,
        title: "Inception",
        duration: 148,
        imdbReviews: 2100000,
        price: 150,
        img: "inseption.jpg"
    },
    {
        id: 2,
        title: "The Dark Knight",
        duration: 152,
        imdbReviews: 2500000,
        price: 220,
        img: "thedarknight.jpg"
    },
    {
        id: 3,
        title: "Interstellar",
        duration: 169,
        imdbReviews: 1600000,
        price: 300,
        img: "interstellar.jpg"
    },
    {
        id: 4,
        title: "The Matrix",
        duration: 136,
        imdbReviews: 1700000,
        price: 180,
        img: "thematrix.jpg"
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        duration: 142,
        imdbReviews: 2700000,
        price: 250,
        img: "shawshank.jpg"
    },
    {
        id: 6,
        title: "Pulp Fiction",
        duration: 154,
        imdbReviews: 1900000,
        price: 210,
        img: "pulpfiction.jpg"
    },
    {
        id: 7,
        title: "Fight Club",
        duration: 139,
        imdbReviews: 1900000,
        price: 190,
        img: "fightclub.jpg"
    },
    {
        id: 8,
        title: "Forrest Gump",
        duration: 142,
        imdbReviews: 2000000,
        price: 240,
        img: "forrestgump.jpg"
    },
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
        img: "lordoftherings.jpg"
    }
];

  return (
    <MoviesContext.Provider value={ movies }>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  return useContext(MoviesContext);
};