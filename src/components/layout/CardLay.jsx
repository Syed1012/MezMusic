import React from "react";
import { Link } from "react-router-dom";

const CardLay = ({ imageSrc, name }) => {
  return (
    <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden group ">
      <Link path="#">
        <img
          className="rounded-lg w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-110"
          src={imageSrc}
          alt="404-Error"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Button favourite */}
          <button className="text-white hover:text-red-500 focus:outline-none mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
          {/* Button play */}
          <button className="text-white hover:text-blue-500 focus:outline-none mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60}
              height={60}
              fill="currentColor"
              className="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </button>
          {/* Button 3-Dots */}
          <button className="text-white hover:text-green-500 focus:outline-none mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
        </div>
      </Link>

      <div className="p-5">
        <a href="#">
          <h7 className="mb-2 text-xl flex font-serif font-medium tracking-tight text-gray-900 dark:text-white">
            {name}
          </h7>
        </a>
      </div>
    </div>
  );
};

const CardList = () => {
  const imgSrc = [
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_m_1658037089.webp",
    // Add more image sources as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {imgSrc.map((src, index) => (
        <CardLay key={index} imageSrc={src} />
      ))}
    </div>
  );
};

export default CardLay;
