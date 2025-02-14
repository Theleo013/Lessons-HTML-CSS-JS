import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  basket: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = BasketSlice.actions;
export const reducer = persistReducer(
  { key: "ECM:basket", storage, localStorage, whitelist: ["basket"] },
  BasketSlice.reducer
);

export default reducer;
