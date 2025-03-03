import React from "react";
import "./statistic.css";
import { PiSealCheckBold } from "react-icons/pi";
import adv from "../assets/adv.avif";
import free from "../assets/free.png";
import staReturn from "../assets/staReturn.avif";

function Statistics() {
  return (
    <div className="container statisBg my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
      <div className="row px-2  ">
        <div className="statcol1 col-md-3 col-sm-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <PiSealCheckBold className="my-2 staticIcon" />
          <div className="stacol2">
            <h1 className="statich1">100% Authentic</h1>
            <p className="staticp">
              All our products are directly sourced from brands
            </p>
          </div>
        </div>
        <div className="statcol1 col-md-3 col-sm-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <img src={free} className="my-2 sticImg" />
          <div className="">
            <h1 className="statich1">Free Shipping</h1>
            <p className="staticp">On all orders above ₹299</p>
          </div>
        </div>
        <div className="statcol1 col-md-3 col-sm-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <img src={adv} className="my-2 sticImg" />
          <div className="stacol2">
            <h1 className="statich1">Certified Beauty Advisors</h1>
            <p className="staticp">Get expert consultations</p>
          </div>
        </div>
        <div className="statcol1 col-md-3 col-sm-6 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2 ">
          <img src={staReturn} className="my-2 sticImg" />
          <div className="stacol2">
            <h1 className="statich1">Easy Returns</h1>
            <p className="staticp">Hassle-free pick-ups and refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
