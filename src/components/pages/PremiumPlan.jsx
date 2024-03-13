import React from "react";
import "./Premium.css";

const PremiumPlan = () => {
  return (
    <section>
      <div className="content">
        <div className="basic box">
          <h2 className="title">Basic</h2>
          <div className="view">
            <div className="icon">
              <img
                src="https://i.postimg.cc/2jcfMcf4/hot-air-balloon.png"
                alt="hot-air-balloon"
              />
            </div>
            <div className="cost">
              <p className="amount">$09</p>
              <p className="detail">per month</p>
            </div>
          </div>
          <div className="description">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Harum, beatae laudantium.</li>
              <li>Odit, fugit saepe.</li>
              <li>Harum, veniam suscipit!</li>
              <li>A, aut veritatis!</li>
              <li>Aliquid, quasi repellat!</li>
            </ul>
          </div>
          <div className="button">
            <button type="submit">START FREE 7 DAYS TRIAL</button>
          </div>
        </div>
        <div className="standard box">
          <h2 className="title">Standard</h2>
          <div className="view">
            <div className="icon">
              <img
                src="https://i.postimg.cc/DzrTN72Z/airplane.png"
                alt="airplane"
              />
            </div>
            <div className="cost">
              <p className="amount">$99</p>
              <p className="detail">per year</p>
            </div>
          </div>
          <div className="description">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Harum, beatae laudantium.</li>
              <li>Odit, fugit saepe.</li>
              <li>Harum, veniam suscipit!</li>
              <li>A, aut veritatis!</li>
              <li>Aliquid, quasi repellat!</li>
            </ul>
          </div>
          <div className="button">
            <button type="submit">START FREE 7 DAYS TRIAL</button>
          </div>
        </div>
        <div className="business box">
          <h2 className="title">Premium</h2>
          <div className="view">
            <div className="icon">
              <img
                src="https://i.postimg.cc/wvFd6FRY/startup.png"
                alt="startup"
              />
            </div>
            <div className="cost">
              <p className="amount">$199</p>
              <p className="detail">per year</p>
            </div>
          </div>
          <div className="description">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Harum, beatae laudantium.</li>
              <li>Odit, fugit saepe.</li>
              <li>Harum, veniam suscipit!</li>
              <li>A, aut veritatis!</li>
              <li>Aliquid, quasi repellat!</li>
            </ul>
          </div>
          <div className="button">
            <button type="submit">START FREE 7 DAYS TRIAL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlan;
