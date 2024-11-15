import React from "react";
import { FeaturedContainer, MovieList} from "../FeaturedMovie/featured.styled";
import { Container } from "../App/app.styled";
import Movie from "../../components/Movie/movie";
import { useMovies } from "../../moviesContex";

const CatalogMovie = () => {
    const { movies } = useMovies();

    return(
        <Container>
            <FeaturedContainer>
                <MovieList>
                    {movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            id={movie.id}
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

export default CatalogMovie