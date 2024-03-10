import React, { useState, useRef } from "react";
import Carousel from "../layout/CarouselHome";
import CardLay from "../layout/CardLay";
import NewPlayer from "../layout/NewPlayer";
import HorizontalScrollCard from "./../layout/HorizontalScrollCard";

const HomePage = () => {
  return (
    <>
      <Carousel />

      <h1 className="my-12 flex font-bold text-4xl font-serif">
        Listen to trending music..
      </h1>

      <HorizontalScrollCard />
    </>
  );
};

export default HomePage;
