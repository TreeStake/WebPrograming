import React from "react";
import { Counter, CounterWrapper, MinusButton, OrderBox, OrderedFilm, PlusButton, Session, TotalPrice } from "./order.styled";
import { useDispatch } from "react-redux";
import { incrementOrder, decrementOrder } from "../../redux/orderSlice";
import { useNavigate } from "react-router-dom";

const Order = ({ id, movieId, title, time, amount, price, maxAmount }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleIncrement = () => {
        if (amount < maxAmount) {
            dispatch(incrementOrder(id));
          } else {
            alert("Максимальна кількість досягнута");
          }
    };

    const handleDecrement = () => {
        dispatch(decrementOrder(id));
    };

    const handleClick = () => {
        navigate(`/movies/${movieId}`);
    };
    return(
        <OrderBox>
            <OrderedFilm onClick={handleClick}>{title}</OrderedFilm>
            <Session>{time}</Session>
            <CounterWrapper>
                <MinusButton type="button" onClick={handleDecrement}></MinusButton>
                <Counter>{amount}</Counter>
                <PlusButton type="button" onClick={handleIncrement} disabled={amount >= maxAmount}></PlusButton>
            </CounterWrapper>
            <TotalPrice>{price * amount}</TotalPrice>
        </OrderBox>
    )
}

export default Order