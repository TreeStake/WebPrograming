import React from "react";
import FeaturedMovie from "../containers/FeaturedMovie/featured";
import { useMovies } from '../moviesContex';

const HomePage = () => {
  const movies = useMovies();

  return (
    <FeaturedMovie movies={movies} />
  );
};

export default HomePage