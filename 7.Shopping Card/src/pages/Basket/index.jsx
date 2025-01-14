import { removeFromBasket } from "@/redux/features/basketSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Basket = () => {
  const { basket } = useSelector((state) => state.basket || []);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 50px",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {basket.length ? (
        basket.map((item, index) => {
          return (
            <div
              key={index}
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
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>{item.description}</span>
              <img width={100} height={100} src={item.img} alt="image" />
              <button onClick={() => dispatch(removeFromBasket(item.id))}>
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <span>empty basket</span>
      )}
    </div>
  );
};

export default Basket;
