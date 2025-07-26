import React, { useState } from "react";
import "./brandToKnow.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../../assets/hBrand1.webp";
import brand2 from "../../assets/hBrand2.avif";
import brand3 from "../../assets/hBrand3.webp";

import { NavLink } from "react-router-dom";
import UseMediaQuery from "../../UseMediaQuery";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function BrandToKnow() {
  const isMobile = UseMediaQuery("(max-width:768px)");
  const brandData = [
    {
      img: brand1,
      description: "Flat 10% off on multi-tasking skincare",
      shop: "Shop Now",
    },
    {
      img: brand2,
      description: "Free mini body cream + pouch over ₹15000",
      shop: "Shop Now",
    },
    {
      img: brand3,
      description: "Up to 20% off on statement scents",
      shop: "Shop Now",
    },
  ];
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const NextArrow = ({ onClick }) => (
    <div
      className={`brandToArrow brandToNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`brandToArrow brandToPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1.5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };
  return (
    <div className="container brandToBg my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
      <div className="row">
        <div className="col-12 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <h1 className="homehTag text-center">Brands To Know</h1>

          <div className="row g-3 ">
            {isMobile ? (
              <Slider {...settings}>
                {brandData.map((item, i) => (
                  <NavLink
                    to="/products"
                    key={i}
                    className="col-md-4 brandCard col-sm-6 col-12 "
                  >
                    <div className="card border-0">
                      <img
                        src={item.img}
                        className="img-fluid rounded"
                        alt="brand"
                      />
                      <div className="card-body brandToBg2">
                        <h5 className="card-title text-center brandToh1">
                          {item.description}
                        </h5>
                        <p className="card-text text-center brandToP">
                          {item.shop} <IoIosArrowForward size={15} />
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </Slider>
            ) : (
              <>
                {brandData.map((item, i) => (
                  <NavLink
                    to="/products"
                    key={i}
                    className="col-md-4 col-sm-6 col-12 "
                  >
                    <div className="card border-0">
                      <img
                        src={item.img}
                        className="img-fluid rounded"
                        alt="brand"
                      />
                      <div className="card-body brandToBg2">
                        <h5 className="card-title text-center brandToh1">
                          {item.description}
                        </h5>
                        <p className="card-text text-center brandToP">
                          {item.shop} <IoIosArrowForward size={15} />
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandToKnow;
