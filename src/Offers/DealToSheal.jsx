import React, { useState } from "react";
import "../Components/Home//wishList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wish1 from "../assets/wish1.jpg";
import wish2 from "../assets/wish2.jpg";
import wish3 from "../assets/wish3.jpg";
import wish4 from "../assets/wish4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
const DealToSheal = () => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const data = [
    { img: wish1, name: "Up to 40% off on makeup mainstays" },
    { img: wish2, name: "Up to 40% off on makeup mainstays" },
    { img: wish3, name: "Up to 40% off on makeup mainstays" },
    { img: wish4, name: "Up to 40% off on makeup mainstays" },
    { img: wish1, name: "Up to 40% off on makeup mainstays" },
    { img: wish2, name: "Up to 40% off on makeup mainstays" },
  ];
  const NextArrow = ({ onClick }) => (
    <div
      className={`wishArrow wishNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`wishArrow wishPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
    // Update the state when the slider changes
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === data.length - 4); // Last slide
    },
  };
  return (
    <div className="container mt-xxl-4 mt-lg-4 mt-md-3 mt-sm-2 mt-2 ">
      <div className="row">
        <h3 className="homehTag  ">Deals To Steal</h3>
        <div className="  my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <Slider {...settings}>
            {data?.map((item, i) => {
              return (
                <div className="">
                  <NavLink
                    to="/products"
                    className=" col-2 card topCateCard border-0 d-flex justify-content-between "
                  >
                    <img
                      src={item.img}
                      className="card-img-top hcateImg rounded"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <p className="cardTextp">{item.name}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DealToSheal;
