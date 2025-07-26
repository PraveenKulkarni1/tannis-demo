import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import "./userOrder.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import UseMediaQuery from "../UseMediaQuery";
import UserOnline from "./UserOnline";

function UserOrder() {
  const location = useLocation();
  const isShipmentPage = location.pathname.includes("shipment");

  const isMobile = UseMediaQuery("(max-width:486px)");
  const [selectedOrderType, setSelectedOrderType] = useState("online");
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedSort1, setSelectedSort1] = useState("Recent");
  const [selectedSort2, setSelectedSort2] = useState("All Status");
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

  const cartProduct = cart?.data?.data?.carts;
  const getOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://tannis.in/api/get-order/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(res.data, "*/getorder");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const toggleDropdown1 = () => setDropdownOpen1(!dropdownOpen1);
  const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2);
  const handleSelect1 = (val) => {
    setSelectedSort1(val);
    setDropdownOpen1(false);
  };
  const handleSelect2 = (val) => {
    setSelectedSort2(val);
    setDropdownOpen2(false);
  };

  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <UserMemu />
          </div>

          <div className="col-md-8">
            <h2 className="orderh2 my-3">My Orders</h2>

            {!isShipmentPage && (
              <>
                <div className="d-flex justify-content-between">
                  <div>
                    <button
                      className={`orderType-button ${
                        selectedOrderType === "online" ? "active" : ""
                      }`}
                      onClick={() => setSelectedOrderType("online")}
                    >
                      Online
                    </button>
                    <button
                      className={`orderType-button2 ${
                        selectedOrderType === "instore" ? "active" : ""
                      }`}
                      onClick={() => setSelectedOrderType("instore")}
                    >
                      In-Store
                    </button>
                  </div>

                  {isMobile ? (
                    <div className="userOnlineFixed">
                      <UserOnline />
                    </div>
                  ) : (
                    selectedOrderType === "online" && (
                      <div className="d-flex gap-2 onLineOrStatus">
                        <div className="custom-select-container d-flex">
                          <label className="mt-2 orderLabel">Order Date:</label>
                          <div
                            className="custom-select border-0"
                            onClick={toggleDropdown1}
                          >
                            {selectedSort1}{" "}
                            {dropdownOpen1 ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                          {dropdownOpen1 && (
                            <div className="custom-options mt-5 d-flex flex-column">
                              <div onClick={() => handleSelect1("Recent")}>
                                Recent
                              </div>
                              <div
                                onClick={() => handleSelect1("Last 30 days")}
                              >
                                Last 30 days
                              </div>
                              <div
                                onClick={() => handleSelect1("Last 6 months")}
                              >
                                Last 6 months
                              </div>
                              <div
                                onClick={() => handleSelect1("Last 12 months")}
                              >
                                Last 12 months
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="custom-select-container d-flex">
                          <label className="mt-2 orderLabel">
                            Order Status
                          </label>
                          <div
                            className="custom-select"
                            onClick={toggleDropdown2}
                          >
                            {selectedSort2}{" "}
                            {dropdownOpen2 ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                          {dropdownOpen2 && (
                            <div className="custom-options mt-5 d-flex flex-column">
                              <div onClick={() => handleSelect2("All Status")}>
                                All Status
                              </div>
                              <div onClick={() => handleSelect2("Delivered")}>
                                Delivered
                              </div>
                              <div onClick={() => handleSelect2("Canceled")}>
                                Canceled
                              </div>
                              <div onClick={() => handleSelect2("Returned")}>
                                Returned
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {selectedOrderType === "online" && cartProduct?.length > 0 && (
                  <div className="row d-flex gap-3 px-2">
                    <div className="col-12">
                      <div className="card mb-2 border-0">
                        <h3 className="cartItem my-3 px-2">
                          Order Id - FY68789D5A0E6D3E8D86s
                          <span className="cartSpan">
                            {/* {cartProduct?.length} items */}
                          </span>
                        </h3>

                        {cartProduct?.map((item, i) => {
                          const { p_name, thumbnail, price, qty } = item;
                          return (
                            <NavLink
                              to="shipment"
                              key={i}
                              style={{ listStyle: "none", color: "black" }}
                            >
                              <div className="row g-0 px-2">
                                <h6 className="card-text">Shipment 1 of 1</h6>
                                <p className="card-title">
                                  Delivery by: Mon 21 Jun 2025
                                </p>
                                <div className="col-2">
                                  <img
                                    src={`https://tannis.in${thumbnail}`}
                                    className="img-fluid cartImg"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-10">
                                  <div className="card-body">
                                    <p className="card-title">
                                      {p_name.substring(0, 6)}
                                      <span className="orderTransit">
                                        In Transit
                                      </span>
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
                              <hr />
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Nested route view */}
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserOrder;
