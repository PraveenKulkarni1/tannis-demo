import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import p1 from "../../assets/p1.avif";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.avif";
import "./wishlistPage.css";
import axios from "axios";
import Layout from "../Layout/Layout";
import { data } from "./data";

function WishlistPage() {
  const [moredata, setMoreData] = useState(data);

  //API

  return (
    <Layout>
      <div className="container my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
        <div className="row">
          <h1 className="homehTag">
            My Wishlist <span className="wishSpan">(6 items)</span>
          </h1>
        </div>
        <div className="row moreRow">
          {moredata.length > 0 &&
            moredata?.map((item, i) => (
              <NavLink
                to="/product-details"
                key={i}
                className="col-md-4 col-sm-6 col-6 mb-3"
              >
                <div className="card moreCard border-0  shadow-sm">
                  <div className="iconAbs d-flex justify-content-end align-items-center">
                    <IoMdClose className="ciClose" />
                  </div>
                  <div className="iconRel">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.title}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-title proTitle">{item.title}</p>
                    <h6 className="card-text proText">{item.description}</h6>
                    <h6 className="titilHead ">
                      <MdCurrencyRupee />
                      {item.mrp - item.discount}
                      <span>
                        <del className="delProduct">
                          <MdCurrencyRupee />
                          {item.mrp}
                        </del>
                        {item.discount && (
                          <span className="offdes">
                            {" "}
                            ({Math.floor((item.discount / item.mrp) * 100)})%
                          </span>
                        )}
                      </span>
                    </h6>

                    <div className="my-xl-5 my-lg-5 my-md-4 my-sm-2 my-2">
                      <button className="moreCartBtn">Move to Bag</button>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>

        <div className="">
          <div className="  row my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
            <div className=" col-4 wishWidth mt-2"></div>
            <h1 className="col-4 wishListEnd text-center ">End Of Wishlist</h1>
            <div className=" col-4 wishWidth mt-2"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WishlistPage;
