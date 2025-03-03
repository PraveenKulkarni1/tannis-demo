import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./dealOfDay.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import axios from "axios";
import { NavLink, Link } from "react-router-dom";
function OfferProducts() {
  const [moredata, setMoreData] = useState([]);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});

  const NextArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow moreLikeNext ${
        isLastSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow moreLikePrev ${
        isFirstSlide ? "iconHidden" : ""
      }`}
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
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
      setIsLastSlide(next === moredata.length - 4);
    },
  };

  useEffect(() => {
    getMoreData();
  }, []);
  const getMoreData = async () => {
    try {
      const result = await axios.get("https://tannis.in/api/products/");
      setMoreData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleLike = (id, event) => {
    event.preventDefault();
    setLikedProducts((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };
  return (
    <div className="container  ">
      <div className="row  ">
        <div className="col-12   my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <h1 className="homehTag ">Must-Have Minis</h1>
        </div>

        <div className="row moreRow ">
          <Slider {...settings}>
            {moredata.length > 0 &&
              moredata?.map((item, i) => {
                let {
                  id,
                  thumbnail,
                  discount,
                  category,
                  p_name,
                  brand,
                  product_type,
                  mrp,
                  sub_category,
                } = item;
                return (
                  <NavLink
                    to="/product-details"
                    className="d-flex dealCard col-md-4  col-sm-6 col-6 mb-2 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-2 "
                  >
                    <div className="card  productCard  border-0 shadow-sm">
                      <div className="iconAbs d-flex justify-content-end align-items-center ">
                        <span
                          className={`heartIcon ${
                            likedProducts[id] ? "red-heart" : ""
                          }`}
                          onClick={(e) => toggleLike(id, e)}
                        >
                          {likedProducts[id] ? (
                            <FaHeart className="pFaHeaert" />
                          ) : (
                            <CiHeart />
                          )}
                        </span>
                      </div>
                      <div className="iconRel">
                        <img
                          src={`https://tannis.in${thumbnail}`}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <p className="card-title proTitle">{brand}</p>
                        <h6 className="card-text proText">
                          {p_name.substring(0, 50)}
                        </h6>
                        <h6 className="titilHead">
                          <MdCurrencyRupee />
                          {mrp - discount}
                          <span>
                            {discount && (
                              <del className="delProduct">
                                <MdCurrencyRupee />
                                {mrp}
                              </del>
                            )}
                            {/* {discount && (
                              <span className="offdes">
                                {" "}
                                ({Math.floor((discount / mrp) * 100)})%
                              </span>
                            )} */}
                          </span>
                        </h6>
                        {/* <p className="offerP3">1 Offer</p>
                        <p className="offerP4">15ml</p>
                        <button className="proCartBtn hoverButton">
                          Add to Bag
                        </button> */}
                      </div>
                    </div>
                  </NavLink>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OfferProducts;
