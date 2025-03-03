import React, { useState } from "react";
import "./offerInFocus.css";
import UseMediaQuery from "../UseMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

function CantMiss() {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const isMobile = UseMediaQuery("(max-width:486px)");
  const data = [
    {
      title: "Grab at",
      offer: (
        <>
          Under
          <BiRupee className="mb-1 ms-2" />
          <span style={{ fontStyle: "italic" }} className="me-2">
            {" "}
            999
          </span>
        </>
      ),
    },
    { title: "Offers On", offer: "Best Seller" },
    { title: "Shop more for less", offer: "Sets & Bundles" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === data.length - 2); // Last slide
    },
  };
  return (
    <div className="container my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
      <div className="row ">
        <div className="col-12  my-xl-2 my-xxl-2 my-lg-2 my-1">
          <h1 className="homehTag">Can't Miss This</h1>
        </div>
      </div>
      <div className="row ">
        {isMobile ? (
          <Slider {...settings}>
            {data.length > 0 &&
              data?.map((item, i) => {
                return (
                  <NavLink
                    to="/products"
                    className="col-md-4 px-xl-0 px-lg-0 px-md-0 px-sm-0 px-2 "
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

export default CantMiss;
