import React from "react";
import { Card, Image, Imdb, MovieTitle, Price, Time } from "./movie.styled";

const Movie = ({title, duration, imdbReviews, price, img}) => {
    return(
        <Card>
            <Image src={`/${img}`}/>
            <Time>{duration} minutes</Time>
            <MovieTitle>{title}</MovieTitle>
            <Imdb>{imdbReviews}</Imdb>
            <Price>${price}</Price>
        </Card>
    )
}

export default Movie