import React from "react";
import { FeaturedContainer, MovieList} from "../FeaturedMovie/featured.styled";
import { Container } from "../App/app.styled";
import Movie from "../../components/Movie/movie";

const CatalogMovie = ({movies, searchQuery, sortOption}) => {
    const filteredMovies = searchQuery
        ? movies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
          )
        : movies;

    const sortedMovies = [...filteredMovies].sort((a, b) => {
        if (sortOption === 'price') {
            return a.price - b.price;
        } else if (sortOption === 'views') {
            return b.imdbReviews - a.imdbReviews;
        } else if (sortOption === 'duration') {
            return a.duration - b.duration;
        }
        return 0;
    });
    return(
        <Container>
            <FeaturedContainer>
                <MovieList>
                    {sortedMovies.map(movie => (
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