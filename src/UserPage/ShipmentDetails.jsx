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
  const location = useLocation();
  const orderId = location.state?.orderId;
  const [orderDetail, setOrderDetail] = useState([]);
  const [address, setAddress] = useState({});
  const getOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(" https://tannis.in/api/get-order/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const allOrders = res?.data?.order || [];

      // Find the one matching order by ID
      const matchedOrder = allOrders.find((order) => order.id === orderId);

      setOrderDetail(matchedOrder ? [matchedOrder] : []);

      setAddress(res.data.shipping_address, "address");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (orderId) {
      getOrder();
    }
  }, [orderId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="orderh2" style={{ border: "none" }}>
            Shipment Details
          </h1>
          <hr />

          {orderDetail?.map((item, i) => {
            const {
              id,
              thumbnail,
              delivery_date,
              qty,
              product: { p_name, price, mrp, selling_price, discount },
            } = item.ordered_items[0].variant;
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
                            Delivery by: {delivery_date}
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
                                      {selling_price}
                                      <span>
                                        <del className="delProduct">
                                          <MdCurrencyRupee />
                                          {mrp}
                                        </del>
                                        <span className="offdes">
                                          {" "}
                                          ({discount}% Off) |{qty} QTY
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
                        {address?.name}
                        <span className="copBorder ms-2">
                          {" "}
                          {address?.type_of_address}
                        </span>
                      </h3>
                      <h3 className="couP3">
                        {address?.address1}, {address?.address2},{" "}
                        {address?.city} , {address?.state} - {address?.pin_code}
                      </h3>
                      <p className="couP5 mb-0">Mobile: {address?.phone}</p>
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
                        <span className="ms-2 codOrder mt-1">
                          {orderDetail[0]?.payment_mode}
                        </span>
                      </p>
                    </div>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="container">
                  {orderDetail?.map((item, i) => {
                    const {
                      id,
                      thumbnail,
                      delivery_date,
                      qty,
                      product: { p_name, price, mrp, selling_price, discount },
                    } = item.ordered_items[0].variant;
                    return (
                      <>
                        <div className="row">
                          <h3 className="couHead my-3">Payment</h3>
                          <div className="col-12 d-flex justify-content-between">
                            <h1 className="orderP1">MRP Total</h1>
                            <p className="orderP">₹{qty * mrp}</p>
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
                            <p className="orderP">₹{mrp / discount}</p>
                          </div>
                          <div className="col-12 d-flex justify-content-between">
                            <h1 className="orderP1">Gift Card</h1>
                            <p className="orderP">₹0</p>
                          </div>
                          <hr />
                          <div className="col-12 d-flex justify-content-between">
                            <h1 className="couHead">Total</h1>
                            <p className="couHead">₹ {qty * selling_price}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
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
