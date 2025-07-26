import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./wishlistProduct.css";
import "./otherBrought.css";
import p1 from "../../assets/p1.avif";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.avif";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../SliderPage/moreToLike.css";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { data } from "./data";

function OtherBrought() {
  const [moredata, setMoreData] = useState(data);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const NextArrow = ({ onClick }) => (
    <div
      className={`otherPdtArrow otherPdtNext ${
        isLastSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`otherPdtArrow otherPdtPrev ${
        isFirstSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 3,
    autoplay: false,
    speed: 2000,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1404,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
      setIsLastSlide(next === moredata.length - 4);
    },
  };

  const toggleLike = (id, event) => {
    event.preventDefault();
    setLikedProducts((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };
  return (
    <div className="container otherBg my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
      <div className="row px-3">
        <div className="col-12 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <div className="">
            {" "}
            <h1 className="wishlistpdth1">Other Customers Also Bought</h1>
          </div>
          <Slider {...settings}>
            {moredata.length > 0 &&
              moredata?.map((item, i) => {
                let {
                  id,
                  img,
                  thumbnail,
                  discount,
                  category,
                  p_name,
                  description,

                  brand,
                  product_type,
                  mrp,
                  sub_category,
                } = item;
                return (
                  <NavLink
                    to="/product-details"
                    className="d-flex col-md-4   wisListCard   col-sm-6 col-6 mb-3 "
                  >
                    <div className="card border-1 shadow-sm wishPdtRow">
                      <div className="iconAbs d-flex justify-content-end align-items-start ">
                        <span
                          className={`heartIcon ${
                            likedProducts[id] ? "red-heart" : ""
                          }`}
                          onClick={(e) => toggleLike(id, e)}
                        >
                          {likedProducts[id] ? (
                            <FaHeart className="pFaHeaert" />
                          ) : (
                            <CiHeart />
                          )}
                        </span>
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className=" d-flex justify-content-center align-items-center">
                            <img
                              src={img}
                              className="card-img-top wishScolImg mt-3"
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="mt-4">
                            <h6 className="card-text proText mt-2">
                              {description}
                            </h6>
                            <h6 className="titilHead mt-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                              <MdCurrencyRupee />
                              {mrp - discount}
                              <span>
                                {discount && (
                                  <del className="delProduct">
                                    <MdCurrencyRupee />
                                    {mrp}
                                  </del>
                                )}
                                {discount && (
                                  <span className="offdes">
                                    {" "}
                                    ({Math.floor((discount / mrp) * 100)})%
                                  </span>
                                )}
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                          <button className="card-body  wishScolBtn ">
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
          </Slider>
        </div>
      </div>
      {/* <div className="row ">
        <Slider {...settings}>
          {moredata.length > 0 &&
            moredata?.map((item, i) => {
              let {
                id,
                img,
                thumbnail,
                discount,
                category,
                p_name,
                description,

                brand,
                product_type,
                mrp,
                sub_category,
              } = item;
              return (
                <NavLink
                  to="/product-details"
                  className="d-flex col-md-4   wisListCard   col-sm-6 col-6 mb-3 "
                >
                  <div className="card border-1 shadow-sm wishPdtRow">
                    <div className="iconAbs d-flex justify-content-end align-items-start ">
                      <span
                        className={`heartIcon ${
                          likedProducts[id] ? "red-heart" : ""
                        }`}
                        onClick={(e) => toggleLike(id, e)}
                      >
                        {likedProducts[id] ? (
                          <FaHeart className="pFaHeaert" />
                        ) : (
                          <CiHeart />
                        )}
                      </span>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className=" d-flex justify-content-center align-items-center">
                          <img
                            src={img}
                            className="card-img-top wishScolImg mt-3"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="mt-4">
                          <h6 className="card-text proText mt-2">
                            {description}
                          </h6>
                          <h6 className="titilHead mt-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                            <MdCurrencyRupee />
                            {mrp - discount}
                            <span>
                              {discount && (
                                <del className="delProduct">
                                  <MdCurrencyRupee />
                                  {mrp}
                                </del>
                              )}
                              {discount && (
                                <span className="offdes">
                                  {" "}
                                  ({Math.floor((discount / mrp) * 100)})%
                                </span>
                              )}
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center align-items-center">
                        <button className="card-body  wishScolBtn ">
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </Slider>
      </div> */}
    </div>
  );
}

export default OtherBrought;
