import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/layout";
import HomePage from "../../pages/home";
import Catalog from "../../pages/catalog";
import { MoviesProvider } from "../../moviesContex";
import MovieDetails from "../../components/MovieDeteils/movieDeteils";
import Cart from "../../pages/cart";
import Submit from "../../pages/submit";
import Success from "../../pages/success";
import Login from "../../pages/login";
import Register from "../../pages/register";

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
                <Route path="submit" element={
                    <MoviesProvider>
                        <Submit/>
                    </MoviesProvider>} />
                <Route path="success" element={
                    <MoviesProvider>
                        <Success/>
                    </MoviesProvider>} />
                <Route path="login" element={
                    <MoviesProvider>
                        <Login/>
                    </MoviesProvider>} />
                <Route path="register" element={
                    <MoviesProvider>
                        <Register/>
                    </MoviesProvider>} />
            </Route>
                
        </Routes>
    )
}

export default App