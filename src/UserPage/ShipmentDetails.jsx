import React, { useState, useEffect } from "react";
import "./shipmentDetails.css";
import axios from "axios";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
function ShipmentDetails({ selectedAddress }) {
  const [cart, setCart] = useState();
  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://tannis.in/api/get-cart", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setCart(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  console.log(cart, "cart");
  // const getOrder = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.get(" https://tannis.in/api/get-order/", {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     });
  //     console.log(res, "getOrders");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getOrder();
  // }, []);

  const cartProduct = cart?.data?.data?.carts;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="orderh2" style={{ border: "none" }}>
            Shipment Details
          </h1>
          <hr />
          {cartProduct?.map((item, i) => {
            const { p_name, thumbnail, price, qty } = item;
            return (
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mb-2">
                      {" "}
                      <div
                        key={i}
                        style={{ listStyle: "none", color: "black" }}
                      >
                        <div className="row g-0 px-2">
                          <h6 className="card-text orderh1">
                            Shipment: 17527350665021258753{" "}
                            <MdOutlineContentCopy size={18} />
                          </h6>
                          <p className="card-title orderp">
                            Delivery by: Mon 21 Jun 2025
                          </p>
                          <div className="col-2 px-2 mt-2">
                            <img
                              src={`https://tannis.in${thumbnail}`}
                              className="img-fluid cartImg"
                              alt="..."
                            />
                          </div>

                          <div className="col-10 ">
                            <div className="card-body">
                              <p className="card-title my-2">
                                {p_name.substring(0, 6)}
                              </p>
                              <h6 className="card-text">
                                {p_name.substring(0, 30)}
                              </h6>
                              <div className="container-fluid p-0 mt-3">
                                <div className="row">
                                  <div className="col-md-8">
                                    <h6 className="titilHead">
                                      <MdCurrencyRupee />
                                      {qty * price}
                                      <span>
                                        <del className="delProduct">
                                          <MdCurrencyRupee />
                                          799
                                        </del>
                                        <span className="offdes">
                                          {" "}
                                          (10% Off) |1 QTY
                                        </span>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* do here */}

                    <div className="col-md-2">
                      <p className="pTrach">Track</p>
                    </div>
                  </div>

                  <div className="row my-2">
                    <div className="col-1 ms-2 text-center">
                      <IoCheckmarkSharp size={20} />
                    </div>
                    <div className="col-10">
                      <h1 className="orderh1">Confirmed</h1>
                      <p className="orderP">
                        Thursday, July 17th, 2025, 12:21 PM
                      </p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-1 ms-2 text-center">
                      <IoCheckmarkSharp size={20} />
                    </div>
                    <div className="col-10">
                      <h1 className="orderh1">Packed</h1>
                      <p className="orderP">
                        Thursday, July 17th, 2025, 3:42 PM
                      </p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-1 ms-2 text-center">
                      <IoCheckmarkSharp size={20} />
                    </div>
                    <div className="col-10">
                      <h1 className="orderh1">Courier Partner Assigned</h1>
                      <p className="orderP">
                        Thursday, July 17th, 2025, 3:47 PM
                      </p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-1 ms-2 text-center">
                      <IoCheckmarkSharp size={20} />
                    </div>
                    <div className="col-10">
                      <h1 className="orderh1">Shipped</h1>
                      <p className="orderP">
                        Thursday, July 17th, 2025, 3:47 PM
                      </p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-1 ms-2 text-center">
                      <IoCheckmarkSharp size={20} />
                    </div>
                    <div className="col-10">
                      <h1 className="orderh1">Delivered</h1>
                      <p className="orderP">
                        Thursday, July 22th, 2025, 12:21 PM
                      </p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-1 ms-2 text-center">
                      <IoCheckmarkSharp size={20} />
                    </div>
                    <div className="col-10">
                      <h1 className="orderh1">Confirmed</h1>
                      <p className="orderP">
                        Thursday, July 17th, 2025, 12:21 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2 ">
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-between">
                      <div className="">
                        <Link to="/" className="getInvocie">
                          Get Invoice
                        </Link>
                      </div>
                      <div className=" ">
                        <Link to="/faq" className="getInvocie">
                          Need Help
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2">
                  <div className="row">
                    {" "}
                    <>
                      <h3 className="couHead my-3">Address</h3>
                      <h3 className="couP1">
                        Praveen
                        <span className="copBorder ms-2"> Home</span>
                      </h3>
                      <h3 className="couP3">
                        #32,Munnekolala, Bangalore , Karnataka - 560036
                      </h3>
                      <p className="couP5 mb-0">Mobile: 7406506051</p>
                    </>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="couHead my-3">Payment</h3>
                      <p className="couP5">
                        <HiOutlineCurrencyRupee size={22} />{" "}
                        <span className="ms-2 codOrder mt-1">COD</span>
                      </p>
                    </div>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="container">
                  <div className="row">
                    <h3 className="couHead my-3">Payment</h3>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">MRP Total</h1>
                      <p className="orderP">₹999</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">MRP Total</h1>
                      <p className="orderP">₹999</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Tannis Points</h1>
                      <p className="orderP">0 points</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Promotion</h1>
                      <p className="orderP">₹0</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Coupon</h1>
                      <p className="orderP">₹999</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Reward Points</h1>
                      <p className="orderP">₹999</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">COD Charges</h1>
                      <p className="orderP">₹19</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Delivery Charges</h1>
                      <p className="orderP">₹0</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Discount</h1>
                      <p className="orderP">₹300</p>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="orderP1">Gift Card</h1>
                      <p className="orderP">₹0</p>
                    </div>
                    <hr />
                    <div className="col-12 d-flex justify-content-between">
                      <h1 className="couHead">Total</h1>
                      <p className="couHead">₹0</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShipmentDetails;
