import React from "react";
import "./giftCard.css";
import { GoGift } from "react-icons/go";
import p1 from "../../assets/p1.avif";
import { FaIndianRupeeSign } from "react-icons/fa6";
function GiftCard() {
  return (
    <div className="container my-2 mx-2">
      <div className="row">
        <div className="col-md-3 giftCardBg  ">
          <h3 className="getFreeh1  mt-2 ">
            <GoGift size={20} /> Get 1 Free Gift
          </h3>
          <div className="giftCardBg2 my-3">
            <div className="container ">
              <div className="row ">
                <div className="col-4  d-flex justify-content-center align-items-center ">
                  <img src={p1} className="img-fluid giftImg" alt="" />
                </div>
                <div className="col-8 mt-2">
                  <h2 className="getFreeh1">
                    GWP Laneige Cream Skin Cerapeptide..
                  </h2>
                  <div className="d-flex justify-content-between">
                    <p className="getFreeh1">
                      <span className="giftSpan"> Free </span>
                      <span className="giftSpan2">
                        {" "}
                        <FaIndianRupeeSign size={13} />
                        <del> 0.01</del>
                      </span>
                    </p>
                    <p className="giftSpan2">1Qty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
