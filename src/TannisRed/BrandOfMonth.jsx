import React from "react";
import "./brandOfMonth.css";
import redTannis1 from "../../src/assets/redTannis1.avif";

import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import UseMediaQuery from "../UseMediaQuery";
import HomeMustHaves from "./../Components/Home/HomeLexury/HomeMustHaves";
function BrandOfMonth() {
  const isMobile = UseMediaQuery("(max-width:486px)");
  return (
    <div className="container tannisRedLexBg  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-3">
      {isMobile ? (
        <div className="row px-4  ">
          <div className="col-12 d-flex justify-content-end align-items-start flex-column TannisRedBg ">
            <h1 className=" TannisRedh2 m-0 p-0 ">Brand Of The Month</h1>
            <h4 className="mt-2 tannisRedP1 ">
              {" "}
              Scientifically proven solutions that address <br />
              skin concerns
            </h4>
          </div>
        </div>
      ) : (
        <div className="row lexuryRow2">
          <div className="col-6  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 px-3">
            <h1 className=" TannisRedh2">Brand Of The Month</h1>
            <h4 className=" tannisRedP1">
              Scientifically proven solutions that address <br />
              skin concerns
            </h4>
          </div>

          <div className="col-6  lexuryImg">
            <img src={redTannis1} className="img-fluid redTannis1 px-2" />
          </div>
        </div>
      )}
      <div className="row">
        <HomeMustHaves />
      </div>
    </div>
  );
}

export default BrandOfMonth;
