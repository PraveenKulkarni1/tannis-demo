import React, { useState } from "react";
import { RiTruckLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./filProduct.css";
const FiltrProduct = () => {
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
  return (
    <>
      <div className="mb-3 sticky-top" style={{ top: "20px" }}>
        <h5 className="producth5 ">
          Lip Blam <span className="productp1">(123 items)</span>
        </h5>

        <div className="my-2 ">
          <div className="truckCarry d-flex justify-content-evenly   ">
            <div className="d-flex gap-2">
              <p>
                <RiTruckLine className="truckStyle" />
              </p>
              <p>Delivery to</p>
            </div>
            <div>
              <p className="dAddres">
                560036
                <IoIosArrowDown />
              </p>
            </div>
          </div>
        </div>
        <div className="fltMain">
          <div className="mb-3 ">
            <ul className="d-flex justify-content-around fil-border my-2 filterUl">
              <li>
                <Link to="/">Filter</Link>
              </li>

              <li>
                <Link to="/" className="filterReset">
                  Reset
                </Link>
              </li>
            </ul>
          </div>

          <div className=" border-1 ">
            <div className="p-0">
              <ul className="nav flex-column ">
                {/* Dropdown Menu */}
                <li className="nav-item  mb-2 fil-border ">
                  <div className="dropdown">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown1}
                    >
                      Category
                      {dropdownOpen1 ? (
                        <FaChevronUp className="ms-2" />
                      ) : (
                        <FaChevronDown className="ms-2" />
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
                  <div className="dropdown">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown2}
                    >
                      Brand
                      {dropdownOpen2 ? (
                        <FaChevronUp className="ms-2" />
                      ) : (
                        <FaChevronDown className="ms-2" />
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
                <li className="nav-item mb-2 fil-border">
                  <div className="dropdown">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown3}
                    >
                      Price
                      {dropdownOpen3 ? (
                        <FaChevronUp className="ms-2" />
                      ) : (
                        <FaChevronDown className="ms-2" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen3 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <li className="dropdown-item">
                        <div className="form-check d-flex">
                          <span>0</span>

                          <input
                            type="range"
                            className="form-range"
                            id="option1"
                            min="0"
                            max="100"
                            value={selectedOptions.option1}
                            onChange={(e) => handleCheckboxChange("option1")}
                          />
                          <span>42</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2 fil-border">
                  <div className="dropdown">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen1 ? "show" : ""
                      }`}
                      onClick={toggleDropdown4}
                    >
                      Discount
                      {dropdownOpen4 ? (
                        <FaChevronUp className="ms-2" />
                      ) : (
                        <FaChevronDown className="ms-2" />
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu ${dropdownOpen4 ? "show" : ""}`}
                      style={{ position: "static" }}
                    >
                      <li className="dropdown-item">
                        <div className="form-check d-flex">
                          <span>0</span>

                          <input
                            type="range"
                            className="form-range"
                            id="option1"
                            min="0"
                            max="100"
                            // value={selectedOptions.option1}
                            onChange={(e) => handleCheckboxChange("option1")}
                          />
                          <span>42</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2 fil-last">
                  <div className="dropdown">
                    <Link
                      className={`filDropText  text-start d-flex justify-content-between align-items-center  ${
                        dropdownOpen5 ? "show" : ""
                      }`}
                      onClick={toggleDropdown5}
                    >
                      Colour
                      {dropdownOpen5 ? (
                        <FaChevronUp className="ms-2" />
                      ) : (
                        <FaChevronDown className="ms-2" />
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
    </>
  );
};

export default FiltrProduct;
