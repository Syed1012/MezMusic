import React from "react";
import Carousel from "../layout/CarouselHome";
import CardLay from "../layout/CardLay";
import NewPlayer from "../layout/NewPlayer";

const HomePage = () => {
  return (
    <>
      <div className="container w-full h-screen">
        <Carousel />
      </div>
      <div className="container">
        <CardLay />
      </div>
      {/* <div className="audioplayer">
        <NewPlayer />
      </div> */}
    </>
  );
};

export default HomePage;
