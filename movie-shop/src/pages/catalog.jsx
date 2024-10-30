import React from "react";
import FeaturedMovie from "../containers/FeaturedMovie/featured";
import Search from "../containers/Search/search";
import { useMovies } from '../moviesContex';

const Catalog = () => {
    const movies = useMovies();
    return(
        <>
        <Search/>
        <FeaturedMovie movies={movies}/>
        </>
    )
}

export default Catalog