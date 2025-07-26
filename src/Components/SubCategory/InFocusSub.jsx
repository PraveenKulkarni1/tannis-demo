import React from "react";
import "../../TannisRed/inFocus.css";
import inFocusImg from "../../assets/inFocus1.avif";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import UseMediaQuery from "../../UseMediaQuery";
function InFocusSub() {
  const isMobile = UseMediaQuery("(max-width:486px)");
  return (
    <div className="container-fluid inFocusBg">
      <div className="container">
        {isMobile ? (
          <>
            <div className="row">
              <div className="col-md-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 ">
                <p className="inFocusP1 mt-2">In Focus</p>
                <h1 className="inFocush1">
                  Yves Saint Laurent : Libre Flowers & Flames EDP
                </h1>
                <Link to="/products" className="inFocusL">
                  Shop Now <IoIosArrowForward size={15} className="me-1" />
                </Link>
              </div>
              <div className="col-md-6 my-3">
                <img src={inFocusImg} alt="" className="img-fluid inFocImg" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-6">
                <img src={inFocusImg} alt="" className="img-fluid inFocImg" />
              </div>
              <div className="col-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 ">
                <p className="inFocusP1">In Focus</p>
                <h1 className="inFocush1">
                  Yves Saint Laurent : Libre Flowers & Flames EDP
                </h1>
                <Link to="/products" className="inFocusL">
                  Shop Now <IoIosArrowForward size={15} className="me-1" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InFocusSub;
