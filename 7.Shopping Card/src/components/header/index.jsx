import React from "react";
import { urls } from "@/shared/urls";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((state) => state.basket);
  console.log("basket:", basket);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        width: "700px",
        height: "50px",
        backgroundColor: "lightblue",
      }}
    >
      <ul>
        <li>
          <NavLink to={urls.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={urls.BASKET}>Basket</NavLink>
        </li>
        <span>basket length is: {basket?.length}</span>
      </ul>
    </div>
  );
};

export default Header;
