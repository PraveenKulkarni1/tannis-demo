import React, { useState } from "react";
import "./proRating.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Stars from "./../Home/Stars";
import p1 from "../../assets/p1.avif";
import UseMediaQuery from "./../../UseMediaQuery";

function ProRating() {
  const [progressOne, setProgressOne] = useState(70);
  const [progressTwo, setProgressTwo] = useState(30);
  const [progressThree, setProgressThree] = useState(0);
  const [progressFour, setProgressFour] = useState(0);
  const [progressFive, setProgressFive] = useState(0);
  const isMobile = UseMediaQuery("(max-width:486px)");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h3 className="proRatMain">Rating</h3>
          <p className="">
            <FaCheckCircle className="text-success me-2" />
            <span className="proRatspan">By 14 verified Tira customers</span>
          </p>
          <div className="d-flex gap-4">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  {" "}
                  <div className="ratRel text-center">
                    <h3 className="proRatNum">
                      4.9<span className="proRatLite"></span>/5
                    </h3>
                    <div className="proRatingStar">
                      <Stars stars={5} />
                    </div>
                    <div className="starBg">
                      <p className="m-0">Highly</p>
                      <p className="m-0">recommend</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 proRatingWidth">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-3">
                        5 <FaStar className="proFastar" />
                      </span>
                      <div className="progress w-75">
                        <div
                          className="progress-bar  bg-secondary"
                          role="progressbar"
                          style={{ width: `${progressOne}%` }}
                          aria-valuenow={progressOne}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="">13</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-3">
                        4 <FaStar className="proFastar" />
                      </span>
                      <div className="progress w-75">
                        <div
                          className="progress-bar  bg-secondary"
                          role="progressbar"
                          style={{ width: `${progressTwo}%` }}
                          aria-valuenow={progressTwo}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="">8</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-3">
                        3 <FaStar className="proFastar" />
                      </span>
                      <div className="progress w-75">
                        <div
                          className="progress-bar  bg-secondary"
                          role="progressbar"
                          style={{ width: `${progressThree}%` }}
                          aria-valuenow={progressThree}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="">0</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-3">
                        2 <FaStar className="proFastar" />
                      </span>
                      <div className="progress w-75">
                        <div
                          className="progress-bar  bg-secondary"
                          role="progressbar"
                          style={{ width: `${progressFour}%` }}
                          aria-valuenow={progressFour}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="">0</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-3">
                        1 <FaStar className="proFastar" />
                      </span>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: `${progressFive}%` }}
                          aria-valuenow={progressFive}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bars Section */}
        </div>
        <div className="col-md-5">
          <h3>Gallery</h3>
          <img src={p1} className="proRatImg" />
        </div>
      </div>
    </div>
  );
}

export default ProRating;
