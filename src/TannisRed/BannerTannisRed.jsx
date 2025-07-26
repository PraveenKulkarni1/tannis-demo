import React, { useState, useEffect } from "react";
import "./bannerTannisRed.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMediaQuery from "../UseMediaQuery";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const BannerTannisRed = () => {
  const navigate = useNavigate();
  const [banners, setBanners] = useState([]);
  const isMobile = UseMediaQuery("(max-width:486px)");
  function Arrow(props) {
    const { className, style, onClick, icon } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
          color: "blue",
          zIndex: 1,
          margin: "10%",
        }}
        onClick={onClick}
      >
        {icon}
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  };
  useEffect(() => {
    getBanner();
  }, []);
  const getBanner = async () => {
    try {
      const result = await axios.get("https://tannis.in/api/banners/");
      setBanners(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
        <div className="col-12 ">
          {isMobile ? (
            <>
              <Slider {...settings}>
                {banners.length > 0 &&
                  banners?.map((item, i) => {
                    let { title, description, image, brand } = item;
                    return (
                      <div className="">
                        <div
                          className="secOneImg1  "
                          style={{
                            backgroundImage: `url(https://tannis.in${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="px-5 ">
                            <h1 className="secOneh1 text-center">{title}</h1>
                          </div>
                        </div>

                        <div className="bg-warning d-flex justify-content-center align-items-center flex-column">
                          <p
                            className="cardTextp"
                            dangerouslySetInnerHTML={{ __html: description }}
                          ></p>
                          <button
                            className="sec1Btn"
                            onClick={() => navigate("/product-list")}
                          >
                            Shop Now
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </>
          ) : (
            <>
              <Slider {...settings}>
                {banners.length > 0 &&
                  banners?.map((item, i) => {
                    let { title, description, image, brand } = item;
                    return (
                      <>
                        <div
                          className="secOneImg1 d-flex justify-content-around align-items-start flex-column  "
                          style={{
                            backgroundImage: `url(https://tannis.in${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="px-5">
                            <h1 className="tBannerh1">{title}</h1>
                            <p
                              className="tBannerp"
                              dangerouslySetInnerHTML={{ __html: description }}
                            ></p>
                            {/* <button
                              className="sec1Btn"
                              onClick={() => navigate("/product-details")}
                            >
                              Shop Now
                            </button> */}
                            <button
                              type="button"
                              className="sec1Btn"
                              onClick={() => navigate("/product-list")}
                            >
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </Slider>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerTannisRed;
