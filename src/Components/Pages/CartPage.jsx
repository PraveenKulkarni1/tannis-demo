import React from "react";
import "./cartPage.css";
import p3 from "../../assets/p3.avif";
import p1 from "../../assets/p1.avif";
import { MdCurrencyRupee } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import MoreToLike from "./../SliderPage/MoreToLike";
import Header from "./../Layout/Header";
function CartPage() {
  return (
    <>
      <div className="position-sticky top-0 start-0 z-3 bg-white">
        <Header />
      </div>
      <div className="container mt-5">
        <div className="row d-flex gap-3">
          <div className="col-md-7 cartBorder  ">
            <div className="card mb-2 border-0">
              <div className="row g-0">
                <h3 className="cartItem my-3">
                  My Bag <span className="cartSpan">(6 itmes)</span>
                </h3>
                <div className="col-2">
                  <img src={p3} className="img-fluid cartImg" alt="..." />
                </div>
                <div className="col-10">
                  <div className="card-body">
                    <p className="card-title">Inde Wild</p>
                    <h6 className="card-text">
                      Inde Wild Dewy Lip Treatment (15ml)
                    </h6>

                    <div className="container-fluid p-0 mt-3">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                          <div className="">
                            <h6 className="titilHead">
                              <MdCurrencyRupee />
                              719
                              <span>
                                <del className="delProduct">
                                  <MdCurrencyRupee />
                                  799{" "}
                                </del>
                                <span className="offdes"> (10% Off)</span>
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="col-md-4 cartIconBorder">
                          <div className="d-flex align-items-center justify-content-center gap-3">
                            <FiPlus />
                            <p className="m-0">2</p>
                            <AiOutlineMinus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2 border-0">
              <div className="row g-0">
                <div className="col-2">
                  <img src={p1} className="img-fluid cartImg" alt="..." />
                </div>
                <div className="col-10">
                  <div className="card-body">
                    <p className="card-title">Inde Wild</p>
                    <h6 className="card-text">
                      Inde Wild Dewy Lip Treatment (15ml)
                    </h6>

                    <div className="container-fluid p-0 mt-3">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                          <div className="">
                            <h6 className="titilHead">
                              <MdCurrencyRupee />
                              719
                              <span>
                                <del className="delProduct">
                                  <MdCurrencyRupee />
                                  799{" "}
                                </del>
                                <span className="offdes"> (10% Off)</span>
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="col-md-4 cartIconBorder">
                          <div className="d-flex align-items-center justify-content-center gap-3">
                            <FiPlus />
                            <p className="m-0">2</p>
                            <AiOutlineMinus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 cartBorderTwo p-0">
            <div className="coupenOne p-2">
              <h3 className="couHead">
                <TbCircleDashedPercentage />
                <span className="">Coupons & Bank Offers</span>
              </h3>
              <p className="couP1">Login to Apply Coupons & Bank Offers</p>
            </div>
            <div className="my-3 p-2 coupenOne">
              <h3 className="couh1">Price Details</h3>
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="couP1">Total MRP</h3>
                  <p className="">Inclusive of All Taxes</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="couP1">
                    {" "}
                    <MdCurrencyRupee />
                    11,145.01
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="couP1">Subtotal</h4>
                <h4 className="couP1">
                  {" "}
                  <MdCurrencyRupee />
                  9,802
                </h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="couP1">Discount</h4>
                <h4 className="couP2">
                  - <MdCurrencyRupee />
                  1,343.01
                </h4>
              </div>
            </div>
            <div className="p-2">
              <div className="d-flex justify-content-between">
                <h4 className="couh1">Total</h4>
                <h4 className="couh1">
                  {" "}
                  <MdCurrencyRupee />
                  9,802
                </h4>
              </div>
              <h3 className="couSave mb-2">
                <LuPartyPopper />
                Woohoo! You save <MdCurrencyRupee />
                1343.01 on this order.
              </h3>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  to="/"
                  className="couCheckOut d-flex justify-content-center align-items-center"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
