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
import { TbCameraPlus } from "react-icons/tb";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  // const [selectedGender, setSelectedGender] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
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
              My Profile
            </h3>
            <div className="profile-container">
              <h2 className="mb-3">Personal photo</h2>
              <IoPersonOutline size={70} className="profile-icon mb-3" />
              <span className="camera-icon " onClick={() => setShowModal(true)}>
                <MdPhotoCamera className="mt-3 porfCamera" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
              <div className="gender-container mb-3">
                <button
                  className={`gender-button ${
                    selectedGender === "male" ? "active" : ""
                  }`}
                  onClick={() => setSelectedGender("male")}
                >
                  Male
                </button>

                <button
                  className={`gender-button ${
                    selectedGender === "female" ? "active" : ""
                  }`}
                  onClick={() => setSelectedGender("female")}
                >
                  Female
                </button>

                <button
                  className={`gender-button ${
                    selectedGender === "nonBinary" ? "active" : ""
                  }`}
                  onClick={() => setSelectedGender("nonBinary")}
                >
                  Non Binary
                </button>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="userPlabel">FirstName</label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="userPlabel">LastName</label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 mb-3 py-2">
                  <label className="userPlabel">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3 py-2">
                  <label className="userPlabel">Birth Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="userPlabel">Email</label>
                <input
                  type="email"
                  className="form-control py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="userPSpan">
                  Email is not verified.{" "}
                  <span className="">
                    <button className="userPLink">Click here</button>
                  </span>{" "}
                  to verify your email
                </span>
              </div>

              <div className="dCenter1">
                <button className="userPbtn my-3 ">Save</button>
              </div>
              <div className="col-12 horiRow "></div>
              <div className="my-3">
                <div className="dropdown mb-1">
                  <Link
                    className={`filDropText  text-start d-flex justify-content-between align-items-center   ${
                      dropdownOpen1 ? "show" : ""
                    }`}
                    onClick={toggleDropdown1}
                  >
                    Manage Account
                    {dropdownOpen1 ? (
                      <FaChevronUp className="ms-2 FaCheColor" />
                    ) : (
                      <FaChevronDown className="ms-2 FaCheColor" />
                    )}
                  </Link>
                  <ul
                    className={`dropdown-menu border-0 ${
                      dropdownOpen1 ? "show" : ""
                    }`}
                  >
                    <Link to="/" className="deleteAccount">
                      Delete Account
                    </Link>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="text-center my-2">
          <Modal.Title>
            <span className="text-center">Change Profile Photo</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Hidden File Input */}
          <input
            type="file"
            id="fileInput"
            className="d-none"
            onChange={(e) => console.log(e.target.files[0])} // Handle file selection
          />

          {/* Upload Button (Triggers File Input) */}
          <div className="d-flex justify-content-center align-items-center flex-column  gap-3">
            <button
              className="d-flex gap-2 justify-content-center align-items-center userPbtn2 w-75"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <CiImageOn size={20} /> Upload Photo
            </button>
            <button className="d-flex gap-2 justify-content-center align-items-center userRemovebtn w-75">
              {" "}
              <AiOutlineDelete size={20} />
              Remove
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}

export default UserProfile;
