import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../../moviesContex';
import { DeteilDiv, FilmInfo, FilmTitle, InfoText, SelectTime, TicketAmount } from './movieDeteils.styled';
import { Option, SearchButton } from '../../containers/Search/search.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/orderSlice';

const MovieDetails = () => {
    const { movieId } = useParams();
    const { selectedMovie, fetchMovieById } = useMovies();
    const dispatch = useDispatch();

    const [time, setTime] = useState('Ранок');
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        fetchMovieById(movieId);
    }, [movieId]);

    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

    const handleAddToCart = async() => {
        if (amount > 5){
            alert("You can`t add this order")
            return
        }
        try {
            await dispatch(addToCart({
                movieId: selectedMovie._id,
                title: selectedMovie.title,
                price: selectedMovie.price,
                amount: Number(amount),
                time,
                maxAmount: 5,
            }));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DeteilDiv>
            <img src={`/${selectedMovie.img}`} alt={selectedMovie.title} width='400px' />
            <FilmInfo>
                <FilmTitle>{selectedMovie.title}</FilmTitle>
                <InfoText>Duration: {selectedMovie.duration}</InfoText>
                <InfoText>IMDB Reviews: {selectedMovie.imdbReviews}</InfoText>
                <InfoText>Price: {selectedMovie.price}</InfoText>
                <SelectTime value={time} onChange={(e) => setTime(e.target.value)}>
                    <Option>Ранок</Option>
                    <Option>Обід</Option>
                    <Option>Вечір</Option>
                </SelectTime>
                <TicketAmount type='number' min={1} value={amount} onChange={(e) => setAmount(e.target.value)}></TicketAmount>
                <SearchButton type='button' onClick={handleAddToCart}>Add to cart</SearchButton>
            </FilmInfo>
        </DeteilDiv>
    );
};

export default MovieDetails;