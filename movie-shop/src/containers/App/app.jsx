import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/layout";
import HomePage from "../../pages/home";
import Catalog from "../../pages/catalog";
import { MoviesProvider } from "../../moviesContex";
import MovieDetails from "../../components/MovieDeteils/movieDeteils";
import Cart from "../../pages/cart";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={
                    <MoviesProvider>
                        <HomePage />
                    </MoviesProvider>}/>
                <Route path="catalog" element={
                    <MoviesProvider>
                        <Catalog/>
                    </MoviesProvider>}/>
                <Route path="cart" element={
                    <MoviesProvider>
                        <Cart/>
                    </MoviesProvider>}/>
                <Route path="/movies/:movieId" element={
                    <MoviesProvider>
                        <MovieDetails/>
                    </MoviesProvider>} />
            </Route>
        </Routes>
    )
}

export default App