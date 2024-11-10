import React, { useState } from "react";
import Search from "../containers/Search/search";
import { useMovies } from '../moviesContex';
import CatalogMovie from "../containers/CatalogMovie/catalogMovie";

const Catalog = () => {
    const movies = useMovies();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');
    return(
        <>
        <Search onSearchChange={setSearchQuery} onSortChange={setSortOption}/>
        <CatalogMovie movies={movies} searchQuery={searchQuery} sortOption={sortOption}/>
        </>
    )
}

export default Catalog