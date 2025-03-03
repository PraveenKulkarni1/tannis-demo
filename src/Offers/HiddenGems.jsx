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
import UseMediaQuery from "../UseMediaQuery";

const HiddenGems = () => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const isMobile = UseMediaQuery("(max-width:486px)");
  const data = [
    { img: wish1, name: "Up to 40% off" },
    { img: wish2, name: "Up to 35% off" },
    { img: wish3, name: "Up to 50% off" },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,

    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
      setIsLastSlide(next === data.length - 2);
    },
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <h3 className="homehTag">Hidden Gems</h3>
        <div className="row my-xl-4 my-xxl-4 my-lg-4 my-md-3 my-sm-2 my-2">
          {isMobile ? (
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i} className="col-12  mb-3 px-2 ">
                  <NavLink
                    to="/products"
                    className="card topCateCard border-0 d-flex flex-column"
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
              ))}
            </Slider>
          ) : (
            <>
              {data.map((item, i) => (
                <div key={i} className="col-md-4 col-sm-6  mb-3">
                  <NavLink
                    to="/products"
                    className="card topCateCard border-0 d-flex flex-column"
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
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiddenGems;
