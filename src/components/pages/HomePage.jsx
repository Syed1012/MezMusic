// src/components/pages/HomePage.jsx

import React, { useState, useRef } from "react";
import Carousel from "../layout/CarouselHome";
import NewPlayer from "../layout/NewPlayer";
import HorizontalScrollCard from "./../layout/HorizontalScrollCard";
import LatestReleases from "../layout/LatestReleases";
import NewCompo from "../layout/NewCompo";
import TopArtists from "../layout/TopArtists";

const HomePage = () => {
  return (
    <>
      <Carousel />

      <h1 className="my-12 flex font-bold text-4xl font-serif">
        Trending...
      </h1>

      {/* Music Cards */}
      <HorizontalScrollCard />

      {/* <h1 className="my-12 flex font-bold text-4xl font-serif">
        New Releases..
      </h1> */}

      {/* Music Cards */}
      {/* <NewCompo /> */}

      <h1 className="my-12 flex font-bold text-4xl font-serif">
        Latest Releases..
      </h1>

      {/* Table container of releases */}
      <LatestReleases />

      <h1 className="my-5 flex font-bold text-4xl font-serif">
        Top Artists..
      </h1>

      <TopArtists />

      <h1 className="my-16 flex font-bold text-4xl font-serif">
        Re-Releases...
      </h1>

      {/* <TopCharts /> */}
    </>
  );
};

export default HomePage;
