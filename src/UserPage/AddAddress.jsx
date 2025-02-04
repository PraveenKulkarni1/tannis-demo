import React, { useState } from "react";
import "./userProfile.css";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { MdPhotoCamera } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./addAddress.css";

function AddAddress() {
  const [houseNo, setHouseNo] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <UserMemu />
          </div>
          <div className="col-md-8">
            <h3 className="userMenuh1 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
              My Address
            </h3>
            <div className="profile-container">
              <h2 className="mb-3 adrsHeading">Add New Address</h2>
              <div className="col-12 horiRow  my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3 "></div>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Flat No/House No/Building No
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Building Name/Street/Society
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={buildingName}
                    onChange={(e) => setBuildingName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Pincode
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control py-2"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    City
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    State
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Country
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="gender-container mb-3">
                {/* Male Button */}
                <button
                  className={`gender-button ${
                    selectedPlace === "home" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("home")}
                >
                  Home
                </button>

                {/* Female Button */}
                <button
                  className={`gender-button ${
                    selectedPlace === "work" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("work")}
                >
                  Work
                </button>

                {/* Other Button */}
                <button
                  className={`gender-button ${
                    selectedPlace === "other" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("other")}
                >
                  Other
                </button>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Full Name
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Contact
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="adrsLabel1">Email (Optional)</label>
                  <input
                    type="email"
                    className="form-control py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6  form-check my-3">
                  <input
                    className="form-check-input signupCheckbox p-0 p-sm-1 p-md-1 p-lg-1"
                    type="checkbox"
                    id="flexCheckChecked"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    <span className="signUpSpan">
                      Make this your default address
                    </span>
                  </label>
                </div>
              </div>
              <button className="userPbtn my-3 ">Save</button>
              {/* <div className="col-12 horiRow "></div> */}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddAddress;
