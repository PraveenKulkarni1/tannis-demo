import React, { useState } from "react";
import "./pdtDetail.css";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { RiTruckLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import SpecifFea from "./SpecifFea";
import MoreToLike from "./../SliderPage/MoreToLike";
const PdtDetail = () => {
  const [isHovered, setIsHovered] = useState(false);
  const totalStars = 5; // Total number of stars

  return (
    <>
      <div className=" my-5">
        <p className="pdtSpan">Inde Wild</p>
        <div className="d-flex justify-content-between">
          <h6 className="pdtMainTxt">
            Inde Wild Dewy Lip Treatment <br /> (15ml)
          </h6>
          <IoShareSocialOutline className="IoShareIcon" />
        </div>
        <div className="d-flex gap-1 my-3">
          <h6 className="d-flex gap-1 pdtText">
            4.6<span className="pdtSpan">/5</span>
            <FaStar className="pdtStar me-2" />
            <u>
              <Link to="/" className="pdtText">
                35 Ratings
              </Link>
            </u>
            .
            <u>
              {" "}
              <Link to="/" className="pdtText">
                Rate this product
              </Link>
            </u>
          </h6>
        </div>
        <div className="">
          <h6 className="pdtHead">
            <MdCurrencyRupee />
            719
            <span>
              <del className="secpdtHead">
                <MdCurrencyRupee />
                799{" "}
              </del>
              <span className="pdtOffer"> (10% Off)</span>
            </span>
          </h6>
        </div>
        <p className="pdtSpan">Inclusive Of All Taxes</p>
        <div className="my-3">
          <p className="pdtSpan">
            Sold by :<span className="pdtText"> RELIANCE RETAIL LIMITED</span>
          </p>
        </div>
        <div className="d-flex justify-content-between offerViewBg my-3">
          <div className="">
            <p className="offetVp">
              <TbCircleDashedPercentage className="me-2" size={15} /> 2 Offers
            </p>
          </div>
          <button className="offvBtn">
            {" "}
            View All
            <MdKeyboardArrowRight size={15} className="ms-2" />
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <button className="pdtBtn ">Add to Bag</button>
          <button className="pdtSaveBtn">Save to Wishlist</button>
        </div>

        <div className="d-flex justify-content-between my-3">
          <div className="text-center pdtCheckbg">
            <p>
              <CiCircleCheck className="pdtcheck" />
            </p>
            <p className="cardTextp">Authentic Products</p>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="text-center pdtCheckbg">
            <p>
              <MdOutlineSwapHorizontalCircle className="pdtcheck" />
            </p>
            <p className="cardTextp">Easy Return</p>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
        <div className="pdtdelBorder mb-3">
          <div className="d-flex justify-content-between my-3 ">
            <div className="d-flex gap-2">
              <Link className="pdtDelivery" to="/">
                <p className=""> Delivery Options</p>
              </Link>

              <Link to="/" className="pdtLocIcon d-flex">
                <CiLocationOn className="me-2" />
                <span className="pdtText"> 560036</span>
              </Link>
            </div>
            <div className="">
              <Link to="/" className=" pdtText  d-flex">
                Change
                <IoIosArrowForward
                  className="mt-1 "
                  style={{ width: "25px", heigth: "25px" }}
                />
              </Link>
            </div>
          </div>
          <div className="d-flex pdtFbg">
            <p className="pdtFree">
              {" "}
              <RiTruckLine className="pdtFree mb-1 me-2" />
              Free develory
            </p>
            <p className="pdtGet"> - Get it by Sun, Jan 26</p>
          </div>
        </div>
        <div className="mb-3">
          <SpecifFea />
        </div>
        <div className="offerViewBg d-flex justify-content-between p-2">
          <h3 className="pdtText p-1">Rate this product</h3>
          <div>
            {[...Array(totalStars)].map((_, index) => (
              <CiStar
                key={index}
                className="pdtFaStar "
                // style={{ color: "yellow" }}
                // Filled or empty star

                // Size of the star
                // Add some spacing between stars
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PdtDetail;
