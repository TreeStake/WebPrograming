import React from "react";
import { Title } from "../FeaturedMovie/featured.styled";
import { ShoppingBox } from "./shoppingCart.styled";
import Order from "../../components/Order/order";
import { useSelector } from 'react-redux';
import { OrderedFilm } from "../../components/Order/order.styled";

const ShoppingCart = () => {
    const orders = useSelector((state) => state.orders);

    const totalSum = orders.reduce((acc, order) => acc + order.price * order.amount, 0);

    return(
        <>
        <ShoppingBox>
            <Title>Shopping Cart</Title>
            {orders.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                orders.map((order) => (
                    <Order
                        key={order.id}
                        id={order.id}
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
        </ShoppingBox>
        
        </>
    )
}

export default ShoppingCart