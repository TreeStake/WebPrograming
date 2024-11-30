import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const fetchCart = createAsyncThunk("orders/fetchCart", async (_) => {
  const token = localStorage.getItem('token')
  const response = await axios.get("http://localhost:5000/cart", {
      headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
});

export const addToCart = createAsyncThunk("orders/addToCart", async (order) => {
  const token = localStorage.getItem('token')
  console.log(order)
  try{
    const response = await axios.post("http://localhost:5000/cart", order, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Product added to the cart');
    return response.data;
  }catch(e){
    alert('You can`t add')
    return
  }
});

export const clearCart = createAsyncThunk("orders/clearCart", async (_) => {
  const token = localStorage.getItem('token')
  await axios.delete("http://localhost:5000/cart", {
      headers: { Authorization: `Bearer ${token}` }
  });
  return [];
});

export const incrementOrder = createAsyncThunk("orders/incrementOrder", async (orderId) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `http://localhost:5000/cart/${orderId}/increment`,
    {}, // Немає тіла запиту
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data; // Оновлений кошик
});

export const decrementOrder = createAsyncThunk("orders/decrementOrder", async (orderId) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `http://localhost:5000/cart/${orderId}/decrement`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data; // Оновлений кошик
});

// const loadFromLocalStorage = () => {
//   const data = localStorage.getItem("orders");
//   return data ? JSON.parse(data) : [];
// };

// const saveToLocalStorage = (state) => {
//   localStorage.setItem("orders", JSON.stringify(state));
// };

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    // addOrder: (state, action) => {
    //   const { movieId, title, price, amount, time, maxAmount } = action.payload;
    //   const existingOrder = state.find(
    //     (order) => order.movieId === movieId && order.time === time
    //   );

    //   if (existingOrder) {
    //     if (existingOrder.amount + amount <= existingOrder.maxAmount) {
    //       existingOrder.amount += amount;
    //       alert('Товар додано в корзину')
    //     }
    //     else{
    //       alert(`Ви не можете замовити більше ${maxAmount}`)
    //     }
    //   } else {
    //     state.push({ id: uuidv4(), movieId, title, price, amount, time, maxAmount });
    //     alert('Товар додано в корзину')
    //   }
    //   saveToLocalStorage(state);
    // },
    // incrementOrder: (state, action) => {
    //   const id = action.payload;
    //   const order = state.find((order) => order.id === id);
    //   if (order && order.amount < order.maxAmount) {
    //     order.amount += 1;
    //     saveToLocalStorage(state);
    //   }
    // },
    // decrementOrder: (state, action) => {
    //   const id = action.payload;
    //   const order = state.find((order) => order.id === id);
    //   if (order && order.amount > 1) {
    //     order.amount -= 1;
    //     saveToLocalStorage(state);
    //   }
    // },
    // removeOrder: (state, action) => {
    //   const id = action.payload;
    //   const updatedState = state.filter((order) => order.id !== id);
    //   saveToLocalStorage(updatedState);
    //   return updatedState
    // },
    // clearOrders: () => {
    //   saveToLocalStorage([]);
    //   return [];
    // },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCart.fulfilled, (state, action) => action.payload)
        .addCase(addToCart.fulfilled, (state, action) => action.payload)
        .addCase(clearCart.fulfilled, () => [])
        .addCase(incrementOrder.fulfilled, (state, action) => {
          return action.payload.orders || state; 
        })
        .addCase(decrementOrder.fulfilled, (state, action) => {
          return action.payload.orders || state; 
        })
        .addDefaultCase((state) => state);
},
});

// export const { addOrder, incrementOrder, decrementOrder, removeOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
