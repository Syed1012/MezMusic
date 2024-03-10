import React from "react";

const BtmPlyr = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 h-28 mb-3 bg-black text-white opacity-50 rounded-2xl">
      <div className="playbutton">
        <button className="p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
          Play
        </button>
      </div>
    </div>
  );
};

export default BtmPlyr;
