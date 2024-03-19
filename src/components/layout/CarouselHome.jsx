// src/components/layout/CarouselHome.jsx

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
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65f2c9e3155e9074bb81e238/BANNER_862765895187107.jpg",
    blackImg,
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65e9b13210ae400438d8b025/BANNER_1200258392290136.png",
    covImg,
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65f42126b41bbe152b196005/BANNER_25008486182538.jpg",
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
