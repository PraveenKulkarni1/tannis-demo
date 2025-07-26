import React, { useState, useEffect } from "react";
import "./trendingOffer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { NavLink } from "react-router-dom";

const TrendingOffer = () => {
  const [offers, setOffers] = useState([]);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("https://tannis.in/api/tranding-offer/");
        const data = await response.json();
        if (data.status === "success") {
          setOffers(data.data); // Store the 'data' field from API response
        } else {
          console.error("Failed to fetch offers:", data.message);
        }
      } catch (error) {
        console.error("Error fetching the offers:", error);
      }
    };

    fetchOffers();
  }, []);
  const NextArrow = ({ onClick }) => (
    <div
      className={`offArrow offNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`offArrow offPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 3,
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
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    // Update the state when the slider changes
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === offers.length - 3); // Last slide
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <h3 className="homehTag">Trending Offers</h3>
        </div>

        <Slider {...settings}>
          {offers?.map((item, i) => (
            <div
              className="col-md-4  px-sm-3 px-md-3 px-xl-0 px-lg-0 px-2  mt-2 mt-xl-3 mt-xxl-3 mt-lg-3 mt-md-2 mt-sm-2 "
              key={i}
            >
              <NavLink to="/products" className="offerDiv">
                <img
                  src={`https://tannis.in${item.image}`}
                  className="img-fluid offerImg"
                  alt={`offer ${i + 1}`}
                />
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingOffer;
