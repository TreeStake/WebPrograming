import React from "react";
import FeaturedMovie from "../containers/FeaturedMovie/featured";
import { useMovies } from '../moviesContex';
import LoaderComponent from "../components/Spiner/spiner";

const HomePage = () => {
  const {movies, loading} = useMovies();

  return (
    <>
    {loading ? <LoaderComponent/> : <FeaturedMovie movies={movies} />}
    </>
  );
};

export default HomePage