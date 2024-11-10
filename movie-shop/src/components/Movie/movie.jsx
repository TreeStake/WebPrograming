import React from "react";
import { Card, Image, Imdb, MovieTitle, Price, Time } from "./movie.styled";
import { Link } from "react-router-dom";

const Movie = ({id, title, duration, imdbReviews, price, img}) => {
    return(
        <Card>
            <Link to={`/movies/${id}`}>
                <Image src={`/${img}`}/>
                <Time>{duration} minutes</Time>
                <MovieTitle>{title}</MovieTitle>
                <Imdb>{imdbReviews}</Imdb>
                <Price>${price}</Price>
            </Link>
            
        </Card>
    )
}

export default Movie