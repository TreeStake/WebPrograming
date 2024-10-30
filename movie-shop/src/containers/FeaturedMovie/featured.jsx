import React, { useState } from "react";
import { FeaturedContainer, MovieList, SeeMore, SpaceBeetwen, Title } from "./featured.styled";
import { Container } from "../App/app.styled";
import Movie from "../../components/Movie/movie";

const FeaturedMovie = ({movies}) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prev => !prev);
    };
    return(
        <Container>
            <FeaturedContainer>
                <SpaceBeetwen>
                    <Title>Featured Movie</Title>
                    <SeeMore onClick={toggleShowAll}>{showAll ? 'See less' : 'See more'}</SeeMore>
                </SpaceBeetwen>
                <MovieList>
                {showAll ? (
                        movies.map(movie => (
                            <Movie 
                                key={movie.id}
                                title={movie.title}
                                duration={movie.duration}
                                imdbReviews={movie.imdbReviews} 
                                price={movie.price} 
                                img={movie.img}
                            />
                        ))
                    ) : (
                        movies.slice(0, 4).map(movie => (
                            <Movie 
                                key={movie.id}
                                title={movie.title}
                                duration={movie.duration}
                                imdbReviews={movie.imdbReviews} 
                                price={movie.price} 
                                img={movie.img}
                            />
                        ))
                    )}
                </MovieList>
            </FeaturedContainer>
        </Container>
    )
}

export default FeaturedMovie