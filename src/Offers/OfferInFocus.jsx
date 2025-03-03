import React, { useState } from "react";
import "./offerInFocus.css";
import UseMediaQuery from "../UseMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

function OfferInFocus() {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const isMobile = UseMediaQuery("(max-width:486px)");
  const data = [
    { title: "Minimun", offer: "30% Off" },
    { title: "Flat", offer: "25% Off" },
    { title: "Minimum", offer: "50% Off" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
      setIsLastSlide(next === data.length - 2);
    },
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 my-xl-2 my-xxl-2 my-lg-2 my-1">
          <h1 className="homehTag">Offers In Focus</h1>
        </div>
      </div>
      <div className="row">
        {isMobile ? (
          <Slider {...settings}>
            {data.length > 0 &&
              data?.map((item, i) => {
                return (
                  <NavLink
                    to="/products"
                    className="col-md-4  px-xl-0 px-lg-0 px-md-0 px-sm-0 px-2"
                    key={i}
                  >
                    <div className=" offFocusBg text-center p-3">
                      <h3 className="offH2">{item.title}</h3>
                      <h1 className="offH1">{item.offer}</h1>
                    </div>{" "}
                  </NavLink>
                );
              })}
          </Slider>
        ) : (
          <>
            {data.length > 0 &&
              data?.map((item, i) => {
                return (
                  <NavLink to="/products" className="col-md-4" key={i}>
                    <div className=" offFocusBg text-center p-3">
                      <h3 className="offH2">{item.title}</h3>
                      <h1 className="offH1">{item.offer}</h1>
                    </div>{" "}
                  </NavLink>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}

export default OfferInFocus;
