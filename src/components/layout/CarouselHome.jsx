import React, { useState, useEffect } from "react";
import "./carouselStyle.css";
import logoIMg from "../../assets/musiclabm.jpg";
import travisImg from "../../assets/electro-music.jpg";
import covImg from "../../assets/indie.jpg";
import blackImg from "../../assets/musiclabm.jpg";
import nikImg from "../../assets/electro-music.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = [
    logoIMg,
    travisImg,
    covImg,
    blackImg,
    nikImg,
  ];

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3500);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, images.length]);

  const handleImageClick = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  return (
    <div className="container mt-5 mb-5">
      {images.map((image, index) => (
        <div
          key={index}
          className={`panel ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url("${image}")` }}
          onClick={() => handleImageClick(index)}
        >
          <h3 className="mt-5">Albums</h3>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
