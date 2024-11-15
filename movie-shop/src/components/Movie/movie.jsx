import React from "react";
import { Card, Image, Imdb, MovieTitle, Price, Time } from "./movie.styled";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../moviesContex";

const Movie = ({id, title, duration, imdbReviews, price, img}) => {
    const { fetchMovieById } = useMovies();
    const navigate = useNavigate();

    const handleClick = async () => {
        await fetchMovieById(id);
        navigate(`/movies/${id}`);
    };
    return(
        <Card onClick={handleClick}>
            <Image src={`/${img}`}/>
            <Time>{duration} minutes</Time>
            <MovieTitle>{title}</MovieTitle>
            <Imdb>{imdbReviews}</Imdb>
            <Price>${price}</Price>
            
        </Card>
    )
}

export default Movie