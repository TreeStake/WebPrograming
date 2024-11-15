import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../../moviesContex';
import { DeteilDiv, FilmInfo, FilmTitle, InfoText } from './movieDeteils.styled';

const MovieDetails = () => {
    const { id } = useParams();
    const { selectedMovie, fetchMovieById } = useMovies();

    useEffect(() => {
        fetchMovieById(id);
    }, [id, fetchMovieById]);

    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

    return (
        <DeteilDiv>
            <img src={`/${selectedMovie.img}`} alt={selectedMovie.title} width='400px' />
            <FilmInfo>
                <FilmTitle>{selectedMovie.title}</FilmTitle>
                <InfoText>Duration: {selectedMovie.duration}</InfoText>
                <InfoText>IMDB Reviews: {selectedMovie.imdbReviews}</InfoText>
                <InfoText>Price: {selectedMovie.price}</InfoText>
            </FilmInfo>
        </DeteilDiv>
    );
};

export default MovieDetails;