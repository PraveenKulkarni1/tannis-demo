import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import Brand from "./Brand";
import logo1 from "../../assets/logo1.jpeg";
import SecHeader from "./SecHeader";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
              {/* Navbar Toggler */}

              <div className=" d-flex justify-content-between navDf ">
                <div className="">
                  <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <NavLink className="navbar-brand navtira" to="/">
                    <img src={logo1} className="logoImg" />
                  </NavLink>
                </div>

                {/* Search & Icons for Smaller Screens */}
                {/* <div className=" d-flex  gap-1 d-lg-none align-items-center  me-2">
                  <FaRegHeart size={20} />
                  <IoBagOutline className="" size={20} />
                  <IoPersonOutline size={20} />
                </div> */}
                <ul className="d-flex d-lg-none gap-1">
                  <li className="nav-item me-2">
                    <Link to="/" className="headerIcon">
                      {" "}
                      <IoIosHeartEmpty size={20} />
                    </Link>
                  </li>
                  <li className="nav-item me-2">
                    <Link to="/cart" className="headerIcon">
                      {" "}
                      <IoBagOutline size={20} />
                    </Link>
                  </li>
                  <li className="nav-item me-2">
                    <Link to="/profile" className="headerIcon">
                      {" "}
                      <IoPersonOutline size={20} />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className="d-flex d-lg-none "></div> */}

              {/* Navbar Menu */}
              <div
                className="collapse navbar-collapse p-3 tiraNavMain"
                id="navbarTogglerDemo01"
              >
                <NavLink className="navbar-brand  d-lg-none searchNav" to="/">
                  <img src={logo1} className="fLogoImg" />
                </NavLink>
                <div className="d-flex justify-content-between">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item dropdown tiraNavDropdown ">
                      <Link
                        className="nav-link navBorder cardTextp"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Brands
                      </Link>
                      <Brand />
                    </li>
                    <li className="nav-item cardTextp">
                      <Link to="/products" className="nav-link navBorder ">
                        Tannis Red
                      </Link>
                    </li>

                    <li className="nav-item cardTextp">
                      <Link
                        to="/detail-product"
                        className="nav-link navBorder "
                      >
                        Offers
                      </Link>
                    </li>
                    <li className="nav-item cardTextp">
                      <Link to="/about" className="nav-link navBorder ">
                        Top Shelf
                      </Link>
                    </li>
                  </ul>
                  <ul className="d-lg-none">
                    <SecHeader />
                  </ul>
                </div>
                {/* Search Bar and Icons for Larger Screens */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center searchNav">
                  <li className="nav-item me-2 ">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2 customSearch "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </li>
                  <ul className="d-flex gap-1">
                    <li className="nav-item me-2">
                      <Link to="/" className="headerIcon">
                        {" "}
                        <IoIosHeartEmpty size={24} />
                      </Link>
                    </li>
                    <li className="nav-item me-2">
                      <Link to="/cart" className="headerIcon">
                        {" "}
                        <IoBagOutline size={24} />
                      </Link>
                    </li>
                    <li className="nav-item me-2">
                      <Link to="/profile" className="headerIcon">
                        {" "}
                        <IoPersonOutline size={24} />
                      </Link>
                    </li>
                  </ul>

                  <li className="nav-item dropdown">
                    <ul className="dropdown-menu navProDrop">
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          Personal Details
                        </Link>
                      </li>
                      <li>
                        <Link to="/order" className="dropdown-item">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link to="/address" className="dropdown-item">
                          Addresses
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Tannis Treats
                        </Link>
                      </li>
                      <li>
                        <Link to="/refer" className="dropdown-item">
                          Refer & Earn
                        </Link>
                      </li>
                      <li>
                        <Link to="/top-shelf" className="dropdown-item">
                          Top Shelf
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <li>
                          <Link to="/write-to-us" className="dropdown-item">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" className="dropdown-item">
                            Help & Support
                          </Link>
                        </li>
                        <li>
                          <Link to="/private-policy" className="dropdown-item">
                            Privace Policy
                          </Link>
                        </li>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="/register" className="dropdown-item ">
                          SignUp
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="dropdown-item ">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/logout" className="dropdown-item HlogOut">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-lg-none my-2">
              <form className="d-flex  px-3 px-lg-5" role="search">
                <input
                  class="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid tWidth"></div>
    </>
  );
};

export default Header;
