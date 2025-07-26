import React, { useState } from "react";
import { RiTruckLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// modal
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { GoDash } from "react-icons/go";
import "./filProduct.css";
const FiltrProduct = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(50);
  const [discount, setDiscount] = useState(10);

  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [dropdownOpen5, setDropdownOpen5] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };
  const toggleDropdown4 = () => {
    setDropdownOpen4(!dropdownOpen4);
  };
  const toggleDropdown5 = () => {
    setDropdownOpen5(!dropdownOpen5);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };
  //change Location Modal
  const [showChangeLoc, setShowChangeLoc] = useState(false);
  const changeLocClose = () => setShowChangeLoc(false);
  const changeLocShow = () => setShowChangeLoc(true);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      houseNo: "#32",
      buildingName: "Sai",
      pincode: "400093",

      city: "Mumbai",
      state: "Maharastra",
      name: "Praveen Kulkarni",
      type: "Home",
      email: "",
      country: "India",
      contact: "7406506051",
    },
  ]);
  return (
    <>
      <div className="mb-3 sticky-top" style={{ top: "50px" }}>
        <h5 className="producth5 ">
          Lip Blam <span className="productp1">(123 items)</span>
        </h5>

        <div className="my-2 ">
          <div className="truckCarry d-flex justify-content-between   ">
            <div className="d-flex gap-2 mt-2">
              <p>
                <RiTruckLine className="truckStyle" />
              </p>
              <p>Delivery to</p>
            </div>
            <div>
              {/* modal */}

              <button className="dAddres mt-2" onClick={changeLocShow}>
                560036
                <IoIosArrowDown className="ms-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="fltMain mt-3 ">
          <div className="mb-3 ">
            <div className="d-flex justify-content-between fil-border my-2 filterUl">
              <button onClick={() => navigate("/")} className="filterReset">Filter</button>

              <button
                onClick={() => window.location.reload()}
                className="filterReset"
              >
                Reset
              </button>
            </div>
          </div>

          <div className=" border-1 ">
            <div className="p-0">
              <ul className="nav flex-column ">
                {/* Dropdown Menu */}
                <li className="nav-item  mb-2 fil-border ">
                  <div className="dropdown mb-1">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown1}
                    >
                      Category
                      {dropdownOpen1 ? (
                        <FaChevronUp className="ms-2 FaCheColor" />
                      ) : (
                        <FaChevronDown className="ms-2 FaCheColor" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen1 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option1"
                            checked={selectedOptions.option1}
                            onChange={() => handleCheckboxChange("option1")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Lip Balm
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option2"
                            checked={selectedOptions.option2}
                            onChange={() => handleCheckboxChange("option2")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Option 1
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option3"
                            checked={selectedOptions.option3}
                            onChange={() => handleCheckboxChange("option3")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Option 1
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2 fil-border">
                  <div className="dropdown mb-1">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown2}
                    >
                      Brand
                      {dropdownOpen2 ? (
                        <FaChevronUp className="ms-2 FaCheColor" />
                      ) : (
                        <FaChevronDown className="ms-2 FaCheColor" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen2 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <li className="dropdown-item">
                        <input
                          class="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option1"
                            checked={selectedOptions.option1}
                            onChange={() => handleCheckboxChange("option1")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Lip Balm
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option2"
                            checked={selectedOptions.option2}
                            onChange={() => handleCheckboxChange("option2")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Option 1
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option3"
                            checked={selectedOptions.option3}
                            onChange={() => handleCheckboxChange("option3")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Option 1
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2  fil-border">
                  <div className="dropdown mb-1">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center   ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown3}
                    >
                      Price
                      {dropdownOpen3 ? (
                        <FaChevronUp className="ms-2 FaCheColor" />
                      ) : (
                        <FaChevronDown className="ms-2 FaCheColor" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen3 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <div className="my-2">
                        <div className="d-flex flex-column">
                          <input
                            type="range"
                            min="0"
                            max="20000"
                            step="10"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="filRange"
                          />
                          <span className="filSerP1">
                            Selected Price: ₹{price}
                          </span>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2 fil-border">
                  <div className="dropdown mb-1">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown4}
                    >
                      Discount
                      {dropdownOpen4 ? (
                        <FaChevronUp className="ms-2 FaCheColor" />
                      ) : (
                        <FaChevronDown className="ms-2 FaCheColor" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen4 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <div className="my-2">
                        <div className="d-flex flex-column">
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            step="10"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="filRange"
                          />
                          <span className="filSerP1">
                            Discount: ₹{discount}
                          </span>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2 fil-border border-0">
                  <div className="dropdown">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen5 ? "show" : ""
                      }`}
                      onClick={toggleDropdown5}
                    >
                      Colour
                      {dropdownOpen5 ? (
                        <FaChevronUp className="ms-2 FaCheColor" />
                      ) : (
                        <FaChevronDown className="ms-2 FaCheColor" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen5 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option1"
                            checked={selectedOptions.option1}
                            onChange={() => handleCheckboxChange("option1")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Red
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option2"
                            checked={selectedOptions.option2}
                            onChange={() => handleCheckboxChange("option2")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Purple
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="option3"
                            checked={selectedOptions.option3}
                            onChange={() => handleCheckboxChange("option3")}
                          />
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              Orange
                            </label>
                            <label
                              className="form-check-label"
                              htmlFor="option1"
                            >
                              256
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Change Location modal */}
      <>
        <Modal show={showChangeLoc} onHide={changeLocClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose your location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className=" d-flex justify-content-between locModelBg1">
                  <div className="col-10 d-flex flex-column">
                    <h4 className="pdtText">
                      {" "}
                      <CiLocationOn size={17} className="me-2" />
                      Location access if off
                    </h4>
                    <p className="cardTextp px-3">
                      Turn it on for a more accurate address and a smoother
                      delivery experience.
                    </p>
                  </div>
                  <div className="col-2">
                    {" "}
                    <IoIosArrowForward className="locIcon1" size={20} />
                  </div>
                </div>
                <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                  <h4 className="text-center pdtSpan ">---- OR ----</h4>
                </div>
                <Form>
                  <Form.Group
                    className="pdtSpan mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Enter Pincode</Form.Label>
                    <div className="d-flex gap-3 ">
                      <Form.Control
                        type="text"
                        placeholder=""
                        value="560036"
                        autoFocus
                      />
                      <button className="revSubmit"> Check</button>
                    </div>
                    <p className="pdtSpan my-2">
                      Delivery to:
                      <span className="pdtCity ">Bengalore</span>
                    </p>
                  </Form.Group>
                </Form>
                <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                  <h4 className="text-center pdtSpan ">---- OR ----</h4>
                </div>
                <div className="col-12">
                  <h3 className="pdtSaveAdd">
                    Select from saved addresses (1)
                  </h3>

                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="card p-3 shadow-sm mb-2 gap-2 w-100"
                    >
                      <div className="d-flex gap-2 flex-start align-items-start">
                        <input
                          type="radio"
                          name="selectedAddress"
                          className="me-2 mt-1"
                          style={{ accentColor: "black" }}
                        />
                        <div className="col-10">
                          <h5 className="mb-1 pdtText">
                            {address.name}{" "}
                            <span className="copBorder">{address.type}</span>
                          </h5>

                          <p className="pdtText m-0 p-0">
                            {address.houseNo},
                            <span className="">
                              {address.buildingName},{" "}
                              <span>{address.city}-</span>
                              <span>
                                {address.state}
                                <GoDash size={18} className="ms-1" />
                              </span>
                            </span>{" "}
                          </p>
                          <p className="pdtText my-1">{address.pincode}</p>
                          <p className="mb-0 pdtText">
                            Mobile: {address.contact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="">
            <Button className="revSubmit " onClick={changeLocClose}>
              Conform
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default FiltrProduct;
