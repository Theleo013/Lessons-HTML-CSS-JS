import { data } from "react-router-dom";

export const allRequest = {
  GET_PRODUCT: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (err) {
      return null;
    }
  },
};
