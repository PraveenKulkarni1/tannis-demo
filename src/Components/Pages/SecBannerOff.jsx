import React, { useState } from "react";
import Slider from "react-slick";
import "./secBannerOff.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import secBan1 from "../../assets/secBan1.avif";
import secBan2 from "../../assets/secBan2.avif";
import { NavLink } from "react-router-dom";

function SecBannerOff() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const BannerData = [secBan1, secBan2];
  return (
    <div className="container secBannerContainer mt-xl-5 mt-xl-5 mt-lg-5 mt-md-3  mt-sm-2 mt-2">
      <div className="row">
        <Slider {...settings}>
          {BannerData?.map((item, index) => (
            <NavLink to="/products" className="col-12">
              <img
                src={item}
                alt={`Banner ${index + 1}`}
                className="img-fluid"
              />
            </NavLink>
          ))}
        </Slider>
        ;
      </div>
    </div>
  );
}

export default SecBannerOff;
