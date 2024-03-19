// src/components/layout/HorizontalScrollCard.jsx

import React from "react";
import CardLay from "../layout/CardLay";

const HorizontalScrollCard = () => {
  const scrollContainerRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const Data = [
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602455847393_20230602050351459/1685686807625/23UMGIM63882_T1_cvrart.jpg",
      name: "Speak Now (Taylor Swift)",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362283_20240309001213/8902894362283/1709924418224/resources/8902894362283.jpg",
      name: "Ae Watan Mere Watan",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2024-03/13/13-00/ZMC08094.jpg",
      name: "Madgaon Express",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602458396768_20231104020718653/1699068014896/23UM1IM11868_T1_cvrart.jpg",
      name: "1989 (Taylor's version)",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465521924_20240311000610722/1710120021875/24UMGIM25964_T1_cvrart.jpg",
      name: "Retro Rewind",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0007615859P.jpg",
      name: "Unstoppable",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602455847393_20230602050351459/1685686807625/23UMGIM63882_T1_cvrart.jpg",
      name: "Speak Now (Tylor Swift)",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1599607201/srch_universalmusic_00602557056273-QMZSY1600019.jpg",
      name: "Let Me Love You",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1480054133/srch_universalmusic_00602557212372-USUG11600977.jpg",
      name: "Star Boy",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/music/190295854126/1610130440/srch_wmg_A10302B0003844207H.jpg",
      name: "Shape of You",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1593283783/srch_universalmusic_00602507120764-GBUM72000433.jpg",
      name: "Heat Waves",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/1493213101239/srch_sonymusic_A10328E00070791419.jpg",
      name: "Night Changes",
    },
    {
      imageSrc:
        "https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0007917812A.jpg",
      name: "Closer",
    },
  ];

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier as needed for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (!isDragging) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div style={{ position: "relative", marginTop: "15px" }}>
      <style>
        {`
          #style-14::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
            background-color: #c4c4c4; /* Light gray */
            opacity : 75;
            border-radius: 25px;
          }
          
          #style-14::-webkit-scrollbar {
            width: 10px;
          }
          
          #style-14::-webkit-scrollbar-thumb {
            background-color: purple; /* White */
            border-radius: 25px;
            background-image: -webkit-linear-gradient(
              90deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 1) 25%,
              transparent 100%,
              rgba(0, 0, 0, 1) 75%,
              transparent
            );
          }
        `}
      </style>
      <div
        id="style-14"
        ref={scrollContainerRef}
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "10px 0",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {Data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              width: "300px",
              margin: "0 10px",
            }}
          >
            <CardLay imageSrc={item.imageSrc} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
