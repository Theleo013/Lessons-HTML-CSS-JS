import React from "react";
import { addToBasket } from "@/redux/features/basketSlice";
import { useDispatch } from "react-redux";

const Card = ({ id, description, img, price, title }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
        border: "1px solid black",
        width: "600px",
        height: "400px",
      }}
    >
      <span>{title}</span>
      <span>{price}</span>
      <span>{description}</span>
      <img width={100} height={100} src={img} alt="image" />
      <button
        onClick={() =>
          dispatch(addToBasket({ id, title, price, description, img }))
        }
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Card;
