import React from "react";
import CardLay from "../layout/CardLay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalScrollCard = () => {
  const scrollContainerRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

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
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        <div
          style={{ display: "inline-block", width: "300px", margin: "0 10px" }}
        >
          <CardLay />
        </div>
        {/* Add more CardLay components as needed */}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
