import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../../moviesContex';
import { DeteilDiv, FilmInfo, FilmTitle, InfoText } from './movieDeteils.styled';

const MovieDetails = () => {
    const { movieId } = useParams();
    const movies = useMovies();
    const movie = movies.find(m => m.id === parseInt(movieId));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <DeteilDiv>
            <img src={`/${movie.img}`} alt={movie.title} width='400px' />
            <FilmInfo>
                <FilmTitle>{movie.title}</FilmTitle>
                <InfoText>Duration: {movie.duration}</InfoText>
                <InfoText>IMDB Reviews: {movie.imdbReviews}</InfoText>
                <InfoText>Price: {movie.price}</InfoText>
            </FilmInfo>
        </DeteilDiv>
    );
};

export default MovieDetails;