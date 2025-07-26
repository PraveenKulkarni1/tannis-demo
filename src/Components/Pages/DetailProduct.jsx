import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detailProduct.css";
import Layout from "./../Layout/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PdtDetail from "./PdtDetail";
import ProRating from "./ProRating";
import MoreToLike from "./../SliderPage/MoreToLike";
import Review from "./ProReview";
import BrandYouLove from "./BrandYouLove";
import UseMediaQuery from "./../../UseMediaQuery";
import LevelUpRoutine from "./LevelUpRoutine";
import QuetionAns from "./QuetionAns";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DetailProduct = () => {
  const sliderRef = useRef(null);
  const params = useParams();
  const isMobile = UseMediaQuery("(max-width:486px)");

  const [product, setProduct] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [sliderData, setSliderData] = useState(null);
  const [show, setShow] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://tannis.in/api/product-details/${params.slug}`
      );
      setProduct(data);
      setProductImg(data.data[0]?.images || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (productImg.length > 0) {
      setSliderData({ id: 0, img: productImg[0].image });
    }
  }, [productImg]);

  const handleThumbnailClick = (id) => {
    setSliderData({ id, img: productImg[id].image });
  };

  const NextArrow = ({ onClick }) => (
    <div
      className={`detailArrow detailNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`detailArrow detailPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 486, settings: { slidesToShow: 1 } },
    ],
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Layout>
      <div className="container">
        <div className="row m-2 d-flex justify-content-between">
          <div className="col-md-6">
            <div
              className="row sticky-top d-flex justify-content-around"
              style={{ top: "190px", zIndex: "1" }}
            >
              <div className="col-md-2">
                {productImg.map((item, i) => (
                  <div className="m-2 delCol2" key={i}>
                    <img
                      className={sliderData?.id === i ? "active-thumbnail" : ""}
                      src={item.image}
                      height="60px"
                      width="60px"
                      onClick={() => handleThumbnailClick(i)}
                      alt={`thumb-${i}`}
                    />
                  </div>
                ))}
              </div>

              {isMobile ? (
                <Slider {...settings}>
                  {productImg.map((item, i) => (
                    <div className="mt-5" key={i}>
                      <img
                        src={item.image}
                        className="slidImg"
                        alt={`mobile-${i}`}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="col-md-6 mt-5">
                  {sliderData && (
                    <img
                      src={sliderData.img}
                      className="slidImg"
                      onClick={() => setShow(true)}
                      alt="Main Display"
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-5">
            <PdtDetail product={product} />
          </div>
        </div>
      </div>

      <ProRating />
      <QuetionAns />
      <Review />
      <MoreToLike />
      <BrandYouLove />
      <LevelUpRoutine />

      {/* Fullscreen Image Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="modal-title"
        fullscreen
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          {sliderData && (
            // <Slider
            //   {...sliderSettings}
            //   initialSlide={sliderData.id}
            //   ref={(slider) => (sliderRef = slider)}
            // >
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef.current = slider;
              }}
            >
              {productImg.map((item, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src={item.image}
                    className="img-fluid modal-img"
                    alt={`modal-${i}`}
                  />
                </div>
              ))}
            </Slider>
          )}

          {/* Modal Thumbnails */}
          <div className="thumbnail-slider-container mt-3">
            {productImg.map((item, i) => (
              <img
                key={i}
                src={item.image}
                className={`thumbnail-img ${
                  sliderData?.id === i ? "active-thumbnail" : ""
                }`}
                onClick={() => {
                  setSliderData({ id: i, img: item.image });
                  sliderRef?.slickGoTo(i);
                }}
                alt={`modal-thumb-${i}`}
              />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default DetailProduct;
