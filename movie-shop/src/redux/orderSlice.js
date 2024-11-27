import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("orders");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("orders", JSON.stringify(state));
};

const orderSlice = createSlice({
  name: "orders",
  initialState: loadFromLocalStorage(),
  reducers: {
    addOrder: (state, action) => {
      const { movieId, title, price, amount, time, maxAmount } = action.payload;
      const existingOrder = state.find(
        (order) => order.movieId === movieId && order.time === time
      );

      if (existingOrder) {
        if (existingOrder.amount + amount <= existingOrder.maxAmount) {
          existingOrder.amount += amount;
          alert('Товар додано в корзину')
        }
        else{
          alert(`Ви не можете замовити більше ${maxAmount}`)
        }
      } else {
        state.push({ id: uuidv4(), movieId, title, price, amount, time, maxAmount });
        alert('Товар додано в корзину')
      }
      saveToLocalStorage(state);
    },
    incrementOrder: (state, action) => {
      const id = action.payload;
      const order = state.find((order) => order.id === id);
      if (order && order.amount < order.maxAmount) {
        order.amount += 1;
        saveToLocalStorage(state);
      }
    },
    decrementOrder: (state, action) => {
      const id = action.payload;
      const order = state.find((order) => order.id === id);
      if (order && order.amount > 1) {
        order.amount -= 1;
        saveToLocalStorage(state);
      }
    },
    removeOrder: (state, action) => {
      const id = action.payload;
      const updatedState = state.filter((order) => order.id !== id);
      saveToLocalStorage(updatedState);
      return updatedState
    },
    clearOrders: () => {
      saveToLocalStorage([]);
      return [];
    },
  },
});

export const { addOrder, incrementOrder, decrementOrder, removeOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
