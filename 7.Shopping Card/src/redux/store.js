import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "@/redux/features/basketSlice";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
export const persistStore = persistStore(store);
