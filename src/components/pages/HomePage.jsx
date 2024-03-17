// src/components/pages/HomePage.jsx

import React, { useState, useRef } from "react";
import Carousel from "../layout/CarouselHome";
import NewPlayer from "../layout/NewPlayer";
import HorizontalScrollCard from "./../layout/HorizontalScrollCard";
import LatestReleases from "../layout/LatestReleases";

const HomePage = () => {
  return (
    <>
      <Carousel />

      <h1 className="my-12 flex font-bold text-4xl font-serif">
        New Releases..
      </h1>

      {/* Music Cards */}
      <HorizontalScrollCard />

      {/* Table container of releases */}
      <LatestReleases />

      <h1 className="my-12 flex font-bold text-4xl font-serif">
        Best of all time...
      </h1>
    </>
  );
};

export default HomePage;
