import React, { useState } from "react";
import "./topartists.css";

const TopArtists = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = 10;
  const cardWidth = 220;
  const containerWidth = cardCount * cardWidth;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardCount - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardCount - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="caro_container">
      <ul
        className="card_wrap"
        style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
      >
        <li className="card">
          <div className="img default_bg">
            <a aria-label="artwork" href="/artist/pritam">
              <div className="LazyLoad is-visible">
                <img
                  src="https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp"
                  alt="Pritam"
                  title="Pritam"
                />
              </div>
            </a>
          </div>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Pritam"
              alt="Pritam"
              href="/artist/pritam"
            >
              Pritam
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/lata-mangeshkar"
          >
            <div className="LazyLoad is-visible">
              <img
                src="https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp"
                alt="Lata Mangeshkar"
                title="Lata Mangeshkar"
              />
            </div>
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Lata Mangeshkar"
              alt="Lata Mangeshkar"
              href="/artist/lata-mangeshkar"
            >
              {" "}
              Lata Mangeshkar
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/arijit-singh"
          >
            <div className="LazyLoad is-visible">
              <img
                src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp"
                alt="Arijit Singh"
                title="Arijit Singh"
              />
            </div>
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Arijit Singh"
              alt="Arijit Singh"
              href="/artist/arijit-singh"
            >
              {" "}
              Arijit Singh
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/kishore-kumar"
          >
            <div className="LazyLoad is-visible">
              <img
                src="https://a10.gaanacdn.com/gn_img/artists/DwPKOxB3qV/DwPKOv0bqV/size_m_1516276549.webp"
                alt="Kishore Kumar"
                title="Kishore Kumar"
              />
            </div>
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Kishore Kumar"
              alt="Kishore Kumar"
              href="/artist/kishore-kumar"
            >
              {" "}
              Kishore Kumar
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/badshah"
          >
            <div className="LazyLoad is-visible">
              <img
                src="https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp"
                alt="Badshah"
                title="Badshah"
              />
            </div>
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Badshah"
              alt="Badshah"
              href="/artist/badshah"
            >
              {" "}
              Badshah
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/b-praak-1"
          >
            <div className="LazyLoad is-visible">
              <img
                src="https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg"
                alt="B Praak"
                title="B Praak"
              />
            </div>
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="B Praak"
              alt="B Praak"
              href="/artist/b-praak-1"
            >
              {" "}
              B Praak
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/alka-yagnik"
          >
            <div className="LazyLoad is-visible">
              <img
                src="https://a10.gaanacdn.com/gn_img/artists/DwPKOBbqVZ/DwPKOBbqVZ/size_m_1516104380.webp"
                alt="Alka Yagnik"
                title="Alka Yagnik"
              />
            </div>
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Alka Yagnik"
              alt="Alka Yagnik"
              href="/artist/alka-yagnik"
            >
              {" "}
              Alka Yagnik
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/udit-narayan"
          >
            <div className="LazyLoad" />
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Udit Narayan"
              alt="Udit Narayan"
              href="/artist/udit-narayan"
            >
              {" "}
              Udit Narayan
            </a>
          </div>
        </li>
        <li className="card">
          <a
            className="img default_bg "
            aria-label="artwork"
            href="/artist/kumar-sanu"
          >
            <div className="LazyLoad" />
          </a>
          <div className="t_wrap">
            <a
              className="al t_over"
              title="Kumar Sanu"
              alt="Kumar Sanu"
              href="/artist/kumar-sanu"
            >
              {" "}
              Kumar Sanu
            </a>
          </div>
        </li>
      </ul>
      <button
        className="bn bn_prev sm-hide "
        title="Previous"
        onClick={handlePrev}
      >
        <svg width={7} height={12} viewBox="0 0 10 17">
          <path
            className="svg_color"
            fill="#000"
            fillRule="evenodd"
            d="M8.586 17L10 15.586 3.414 9 10 2.414 8.586 1 0 9z"
          />
        </svg>
      </button>
      <button className="bn bn_next sm-hide " title="Next" onClick={handleNext}>
        <svg width={7} height={12} viewBox="0 0 10 17">
          <path
            className="svg_color"
            fill="#000"
            fillRule="evenodd"
            d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TopArtists;
