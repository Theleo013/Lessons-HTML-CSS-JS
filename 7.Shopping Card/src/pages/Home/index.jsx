import Card from "@/components/card";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 50px",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {data?.map((item) => {
        return (
          <Card
            key={item?.id}
            title={item?.title}
            price={item?.price}
            description={item?.description}
            img={item?.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
