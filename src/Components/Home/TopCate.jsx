import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topCate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMediaQuery from "./../../UseMediaQuery";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const TopCate = () => {
  const [category, setCategory] = useState([]);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const isMobile = UseMediaQuery("(max-width:768px)");

  const NextArrow = ({ onClick }) => (
    <div
      className={`topCArrow topCNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`topCArrow topCPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 5,
    autoplay: false,
    slidesToScroll: 1,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    // Update the state when the slider changes
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === category.length - 3); // Last slide
    },
  };

  //API

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const result = await axios.get("https://tannis.in/api/categories/");
    setCategory(result.data);
  };

  return (
    <div className="container mt-xxl-5 mt-lg-5 mt-md-3 mt-sm-2 mt-2 ">
      <div className="row">
        <h3 className="homehTag  ">Top Categories</h3>
        <div className="  my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <Slider {...settings}>
            {category?.map((item, i) => {
              return (
                <div div className="">
                  <NavLink
                    to="/"
                    className=" col-2 card topCateCard border-0 d-flex justify-content-between "
                  >
                    <img
                      src={`https://tannis.in${item.image}`}
                      className="card-img-top hcateImg"
                      alt={item.c_name}
                    />
                    <div className="card-body">
                      <p className="cardTextp">{item.c_name}</p>
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

export default TopCate;
