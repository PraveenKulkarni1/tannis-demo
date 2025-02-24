import React, { useState } from "react";
import "./offerInFocus.css";
import UseMediaQuery from "../UseMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

function OfferInFocus() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const isMobile = UseMediaQuery("(max-width:486px)");
  const data = [
    { title: "Minimun", offer: "30% Off" },
    { title: "Flat", offer: "25% Off" },
    { title: "Minimum", offer: "50% Off" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
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
                  <NavLink to="/products" className="col-md-4" key={i}>
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
