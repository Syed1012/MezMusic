import React from "react";
import Carousel from "../layout/CarouselHome";

const HomePage = () => {
  return (
    <>
      <div className="container w-full h-screen">
        <Carousel />
      </div>
      <div className="container bg-black w-full h-screen">
        <div className="col-12 col-md-6 mt-5">
          {/* Profile Card */}
          <div className="card bg-primary shadow-soft border-light mb-5 text-center">
            <div className="profile-image shadow-inset border border-light bg-primary p-3 rounded-circle mt-n5 mx-auto">
              <img
                src="../../assets/img/team/profile-picture-1.jpg"
                className="card-img-top shadow-soft p-3 border border-light rounded-circle"
                alt="Joseph Avatar"
              />
            </div>
            <div className="card-body">
              <h3 className="h5 mb-2">Joseph Garth</h3>
              <span className="h6 font-weight-normal text-gray mb-3">
                Designer
              </span>
              <ul className="list-unstyled d-flex justify-content-center my-3">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    aria-label="facebook social link"
                    className="icon icon-xs icon-facebook mr-3"
                  >
                    <span className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    aria-label="twitter social link"
                    className="icon icon-xs icon-twitter mr-3"
                  >
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    aria-label="slack social link"
                    className="icon icon-xs icon-slack mr-3"
                  >
                    <span className="fab fa-slack-hash" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    aria-label="dribbble social link"
                    className="icon icon-xs icon-dribbble mr-3"
                  >
                    <span className="fab fa-dribbble" />
                  </a>
                </li>
              </ul>
              <div className="row mt-5">
                <div className="col-4">
                  <div className="icon icon-shape icon-shape-xs icon-facebook icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                    <span className="fab fa-facebook-f" />
                  </div>
                  <h2 className="h5 mb-0">25K</h2>
                  <span className="small">Followers</span>
                </div>
                <div className="col-4">
                  <div className="icon icon-shape icon-shape-xs icon-dribbble icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                    <span className="fab fa-dribbble" />
                  </div>
                  <h2 className="h5 mb-0">5K</h2>
                  <span className="small">Followers</span>
                </div>
                <div className="col-4">
                  <div className="icon icon-shape icon-shape-xs icon-behance icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                    <span className="fab fa-behance" />
                  </div>
                  <h2 className="h5 mb-0">62K</h2>
                  <span className="small">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
