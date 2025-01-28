import React, { useState } from "react";
import "./offers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import toffer1 from "../../assets/toffer1.avif";
import toffer2 from "../../assets/toffer2.avif";
import toffer3 from "../../assets/toffer3.avif";
import toffer4 from "../../assets/toffer4.avif";

const Offers = () => {
  const data = [toffer1, toffer2, toffer3, toffer4];
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  // Next arrow component
  const NextArrow = ({ onClick }) => (
    <div
      className={`offArrow offNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  // Previous arrow component
  const PrevArrow = ({ onClick }) => (
    <div
      className={`offArrow offPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  // Slider settings
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Update the state when the slider changes
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === data.length - 3); // Last slide
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <h3 className="homehTag">Trending Offers</h3>
          <Slider {...settings}>
            {data.map((item, i) => (
              <div
                className="mt-2 mt-xl-4 mt-xxl-4 mt-lg-4 mt-md-2 mt-sm-2"
                key={i}
              >
                <div className="offerDiv">
                  <img
                    src={item}
                    className="img-fluid offerImg"
                    alt={`offer ${i + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Offers;
