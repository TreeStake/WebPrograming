import React from "react";
import Search from "../containers/Search/search";
import { useMovies } from '../moviesContex';
import CatalogMovie from "../containers/CatalogMovie/catalogMovie";
import LoaderComponent from "../components/Spiner/spiner";

const Catalog = () => {
    const {loading, handleSearchAndSortMovies} = useMovies();

    return(
        <>
        <Search onSearchAndSort={handleSearchAndSortMovies}/>
        {loading ? <LoaderComponent/> : <CatalogMovie/>}
        </>
    )
}

export default Catalog