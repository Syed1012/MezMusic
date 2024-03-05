import React from "react";
import Carousel from "../layout/CarouselHome";
import CardLay from "../layout/CardLay";


const HomePage = () => {
  return (
    <>
      <div className="container w-full h-screen">
        <Carousel />
      </div>
      <div className="container">
      <CardLay />
      </div>
      
    </>
  );
};

export default HomePage;
