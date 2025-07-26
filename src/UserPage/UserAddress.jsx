import React, { useState, useEffect } from "react";
import "./userAddress.css";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import { Link, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import locImg1 from "../../src/assets/locImg1.png";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
function UserAddress() {
  const location = useLocation();
  const [address, setAddress] = useState([]);

  const getAllAddress = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://tannis.in/api/get-shipping-address/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setAddress(res?.data);
      console.log(address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);
  return (
    <Layout>
      <div className="container mt-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <UserMemu />
          </div>
          <div className="col-md-8">
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
            {address?.map((item, i) => {
              let {
                address1,
                address2,
                city,
                state,
                name,
                is_default,
                phone,
                pin_code,
                type_of_address,
              } = item;
              return (
                <>
                  <div className="d-flex justify-content-between  mt-3">
                    <div className="">
                      <div className="col-4">
                        <h3 className="storeAdd1 ">{type_of_address}</h3>
                      </div>

                      <h4 className="storeName m-0">{name}</h4>
                      <p className="storeData m-0">{address1} </p>
                      <p className="storeData m-0">{address2}</p>
                      <p className="storeData m-0">
                        {city}, {state} - {pin_code}{" "}
                      </p>
                      <p className="storeData m-0">Mobile: {phone} </p>
                    </div>
                    <div className="">
                      <Link to="/add-address">
                        <FaRegEdit size={20} className="text-dark" />
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserAddress;
