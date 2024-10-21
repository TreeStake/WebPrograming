import React from "react";
import { FeaturedContainer, MovieList, Title } from "./featured.styled";
import { Container } from "../App/app.styled";
import Movie from "../../components/Movie/movie";

const FeaturedMovie = ({movies}) => {
    return(
        <Container>
            <FeaturedContainer>
                <Title>Featured Movie</Title>
                <MovieList>
                    {movies.map(movie => (
                        <Movie 
                        key={movie.id}
                        title={movie.title}
                        duration={movie.duration}
                        imdbReviews={movie.imdbReviews} 
                        price={movie.price} 
                        img={movie.img}
                        />
                    ))}
                </MovieList>
            </FeaturedContainer>
        </Container>
    )
}

export default FeaturedMovie