import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  getAllMovies,
  searchAndSortMovies, getById
} from './api';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchAllMovies = async () => {
    setLoading(true);
    setError(null);
    try {
        const data = await getAllMovies();
        setMovies(data);
    } catch (err) {
        setError('Помилка при завантаженні фільмів');
    } finally {
        setLoading(false);
    }
  };

  const fetchMovieById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      console.log(id)
      const data = await getById(id);
      setSelectedMovie(data);
    } catch (err) {
      setError('Помилка при отриманні фільму за ID');
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearchAndSortMovies = async (search, sort, filterPrice, filterViews) => {
    setLoading(true);
    setError(null);
    try {
        const data = await searchAndSortMovies(search, sort, filterPrice, filterViews);
        setMovies(data);
    } catch (err) {
        setError('Помилка при пошуку та сортуванні фільмів');
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        error,
        selectedMovie,
        fetchAllMovies,
        handleSearchAndSortMovies,
        fetchMovieById
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
