import React, { useEffect } from "react";
import { Title } from "../FeaturedMovie/featured.styled";
import { ButtonsBox, ShoppingBox } from "./shoppingCart.styled";
import Order from "../../components/Order/order";
import { useDispatch, useSelector } from 'react-redux';
import { OrderedFilm } from "../../components/Order/order.styled";
import { SearchButton } from "../Search/search.styled";
import { useNavigate } from "react-router-dom";
import { fetchCart } from "../../redux/orderSlice";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
    const  token  = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            dispatch(fetchCart());
        }
    }, [token, dispatch]);

    console.log(orders)
    const totalSum = Array.isArray(orders) && orders.length > 0
    ? orders.reduce((acc, order) => acc + order.price * order.amount, 0)
    : 0;

    const navigate = useNavigate()

    const clickCountinue = () =>{
        navigate('/submit')
    }

    const clickBack = () => {
        navigate('/catalog')
    }

    if (!token) {
        return <p>Будь ласка, увійдіть, щоб переглянути корзину.</p>;
    }

    return(
        <>
        <ShoppingBox>
            <Title>Shopping Cart</Title>
            {orders.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                orders.map((order) => (
                    <Order
                        key={order._id}
                        id={order._id}
                        movieId={order.movieId}
                        title={order.title}
                        time={order.time}
                        amount={order.amount}
                        price={order.price}
                        maxAmount={5}
                    />
                ))
            )}
            <OrderedFilm>Total sum: ${totalSum}</OrderedFilm>
            <ButtonsBox>
                <SearchButton onClick={clickBack}>Go Back</SearchButton>
                <SearchButton onClick={clickCountinue}>Countinue</SearchButton>
            </ButtonsBox>
        </ShoppingBox>
        
        </>
    )
}

export default ShoppingCart