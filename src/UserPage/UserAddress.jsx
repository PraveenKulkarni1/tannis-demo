import React from "react";
import "./userAddress.css";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import { Link, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import locImg1 from "../../src/assets/locImg1.png";
import { FaRegEdit } from "react-icons/fa";

function UserAddress() {
  const location = useLocation();
  return (
    <Layout>
      <div className="container mt-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMemu />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-center align-items-center flex-column">
              {/* <img src={locImg1} className="locImg1" /> */}
              <img
                src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/organization/62d539deb767fec5c06847bd/theme/assets/no-address.9657a8dca1e0c9479ee722a9cb3b68c1.svg"
                className="locImg2 mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2"
              />
              <p className="noAddress my-3">No Address Saved</p>

              {location.pathname !== "/add-address" && (
                <Link to="/add-address" className="addAddress">
                  <FiPlus className="text-white" size={15} />
                  Add New Address
                </Link>
              )}
            </div>
            <h3 className="userMenuh1 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
              My Address
            </h3>
            <div className="profile-container d-flex justify-content-between">
              <h2 className="mb-3 adrsHeading"> Addresses</h2>{" "}
              <Link to="/add-address" className="addRedAddress">
                <FiPlus className="text-danger" size={15} />
                Add New Address
              </Link>
            </div>
            <div className="col-12 horiRow  my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3 "></div>
            <div className="d-flex justify-content-between">
              <div className="">
                <div className="col-3">
                  <h3 className="storeAdd1 col-6">Home</h3>
                </div>

                <h4 className="storeName m-0">Praveen K</h4>
                <p className="storeData m-0">#32 </p>
                <p className="storeData m-0">Munne</p>
                <p className="storeData m-0">Mumbai, Maharashtra - 400093 </p>
                <p className="storeData m-0">Mobile: 7406506051 </p>
              </div>
              <div className="">
                <Link to="/add-address">
                  <FaRegEdit size={20} className="text-dark" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserAddress;
