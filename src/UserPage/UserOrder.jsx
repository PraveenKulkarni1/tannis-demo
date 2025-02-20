import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import "./userOrder.css";
import p1 from "../assets/p1.avif";
import p2 from "../assets/p2.avif";
import p3 from "../assets/p3.avif";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function UserOrder() {
  const [selectedOrderType, setSelectedOrderType] = useState("online");
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedSort1, setSelectedSort1] = useState("Recent");
  const [selectedSort2, setSelectedSort2] = useState("All Status");

  // API
  const data = [
    {
      id: 1,
      thumbnail: p1,
      p_name:
        "Lakme Xtraordin-airy Mattereal Mousse Foundation, 03 Golden Sand (25 g)",
      mrp: 500.0,
      product_type: "simple",
      brand: "Lakme",
      color: "red",
      status: "Delivered on",
      statusColor: "#26A541",
      message: "Your item has beed delivered",
      date: "1 Feb",
    },
    {
      id: 1,
      thumbnail: p2,
      p_name:
        "Lakme Xtraordin-airy Mattereal Mousse Foundation, 03 Golden Sand (25 g)",
      mrp: 500.0,
      product_type: "simple",
      brand: "Lakme",
      color: "red",
      status: "Return Complited on",
      statusColor: "#FF9F00",
      message:
        "You returned this order because you don't want this item anymore.",
      date: "25 Jan",
    },
    {
      id: 1,
      thumbnail: p3,
      p_name:
        "Lakme Xtraordin-airy Mattereal Mousse Foundation, 03 Golden Sand (25 g)",
      mrp: 500.0,
      product_type: "simple",
      brand: "Lakme",
      color: "red",
      status: "Cancelled on",
      statusColor: "#FF6161",
      message:
        " You requested a cancellation  because of the issue with the delivery date",
      date: "5 Jan",
    },
  ];

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const handleSelect1 = (value) => {
    setSelectedSort1(value);
    setDropdownOpen1(false);
  };

  const handleSelect2 = (value) => {
    setSelectedSort2(value);
    setDropdownOpen2(false);
  };

  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <UserMemu />
          </div>
          <div className="col-md-8 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2">
            <h2 className="orderh2 my-3">My Orders</h2>

            {/* Order Type Buttons */}
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

              {selectedOrderType === "online" && (
                <div className="d-flex gap-2">
                  <div className="custom-select-container d-flex">
                    <label
                      className="mt-2 orderLabel"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Order Date:
                    </label>
                    <div
                      className="custom-select border-0"
                      onClick={toggleDropdown1}
                    >
                      {selectedSort1}{" "}
                      {dropdownOpen1 ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {dropdownOpen1 && (
                      <div className="custom-options mt-5 d-flex flex-column">
                        <div onClick={() => handleSelect1("Recent")}>
                          Recent
                        </div>
                        <div onClick={() => handleSelect1("Last 30 days")}>
                          Last 30 days
                        </div>
                        <div onClick={() => handleSelect1("Last 6 months")}>
                          Last 6 months
                        </div>
                        <div onClick={() => handleSelect1("Last 12 months")}>
                          Last 12 months
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="custom-select-container d-flex">
                    <label
                      className="mt-2 orderLabel"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Order Status
                    </label>
                    <div className="custom-select" onClick={toggleDropdown2}>
                      {selectedSort2}{" "}
                      {dropdownOpen2 ? <FaChevronUp /> : <FaChevronDown />}
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
              )}
            </div>

            {selectedOrderType === "online" && (
              <div className="col-12 d-flex justify-content-center align-items-center flex-column my-5">
                <img
                  src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/organization/62d539deb767fec5c06847bd/theme/assets/empty-cart.d87a47c967de26a8b7d255b0f2c5245a.svg"
                  className="noOrImg mb-3"
                  alt="No Orders"
                />
                <h2 className="NoOrh2">No Orders are available currently</h2>
              </div>
            )}

            {selectedOrderType === "online" && data?.length > 0 ? (
              data?.map((item, i) => (
                <div className="card my-3" key={i}>
                  <div className="row g-0">
                    <div className="col-md-2 my-1 my-xl-3 my-lg-3 my-md-2 my-sm-2 ">
                      <img
                        src={item.thumbnail}
                        className="img-fluid rounded-start"
                        alt="Product"
                      />
                    </div>
                    <div className="col-md-6 my-1 my-xl-3 my-lg-3 my-md-2 my-sm-2 ">
                      <div className="card-body d-flex justify-content-around  ">
                        <div className="">
                          <h5 className="card-title orderName">
                            {item.p_name.substring(0, 30)}
                          </h5>
                          <div className="d-flex gap-3">
                            <p className="card-title orderTitle">
                              Color:{item.color}
                            </p>
                            <p className="card-title orderTitle">Size:M</p>
                          </div>
                        </div>
                        <p className="card-text orderTitle">
                          {" "}
                          <MdCurrencyRupee />
                          {item.mrp}.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 my-1 my-xl-3 my-lg-3 my-md-2 my-sm-2 deliveryMain">
                      <h2 className="orderName d-flex gap-2 ">
                        <span>
                          <FaCircle
                            size={7}
                            style={{
                              backgroundColor: item.statusColor,
                              padding: "5px",
                              borderRadius: "50%",
                              marginBottom: "3px",
                              color: "#fff",
                            }}
                          />
                        </span>
                        {item.status} {item.date}
                      </h2>
                      <p className="orderTitle">{item.message}</p>
                      <Link to="/" className="orderName">
                        <FaStar className="icons my-2" /> Rate & Review Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 d-flex justify-content-center align-items-center flex-column my-5">
                <img
                  src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/organization/62d539deb767fec5c06847bd/theme/assets/empty-cart.d87a47c967de26a8b7d255b0f2c5245a.svg"
                  className="noOrImg mb-3"
                  alt="No Orders"
                />
                <h2 className="NoOrh2">No Orders are available currently</h2>
              </div>
            )}

            {selectedOrderType === "instore" && (
              <div className=" d-flex justify-content-center align-items-center flex-column my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2 inStMain">
                <img
                  src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/organization/62d539deb767fec5c06847bd/theme/assets/empty-bag.bf8510370f39f54bb0cefd726e79f828.jpg"
                  className="mb-3"
                />
                <h2 className="inStoreH2">
                  Oops! Looks like we haven't seen you around yet!
                </h2>
                <p className="inStoreP">
                  Visit your nearest Tannis store for a new and exciting beauty
                  shopping experience
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserOrder;
