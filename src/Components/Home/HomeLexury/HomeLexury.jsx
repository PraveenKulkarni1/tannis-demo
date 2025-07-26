import React from "react";
import "./homeLexury.css";
import LexMake from "../../../assets/beauty2.avif";
import HomeMustHaves from "./HomeMustHaves";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import UseMediaQuery from "../../../UseMediaQuery";
function HomeLexury() {
  const isMobile = UseMediaQuery("(max-width:486px)");
  return (
    <div className="container homeLexBg  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-3">
      {isMobile ? (
        <div className="row px-4  ">
          <div className="col-12 d-flex justify-content-end align-items-start flex-column lexuryRedBg ">
            <h1 className=" lexuryh2 m-0 p-0 ">RED</h1>
            <h4 className=" lexuryP1 ">Lexury beauty for every you</h4>
            <Link to="/" className="lexuryHSpan mt-1">
              Discover Tannis <IoIosArrowForward className="me-1" size={14} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="row lexuryRow3">
          <div className="col-6  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 px-3">
            <h1 className=" lexuryh2">RED</h1>
            <h4 className=" homehTag">Lexury beauty for every you</h4>
            <Link to="/" className="lexuryHSpan">
              Discover Tannis <IoIosArrowForward size={15} />
            </Link>
          </div>

          <div className="col-6  lexuryImg">
            <img src={LexMake} className="img-fluid px-2" />
          </div>
        </div>
      )}
      <div className="row">
        <HomeMustHaves />
      </div>
    </div>
  );
}

export default HomeLexury;
