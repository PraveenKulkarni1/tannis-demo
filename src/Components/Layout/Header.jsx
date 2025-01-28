import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import Brand from "./Brand";
import logo1 from "../../assets/logo1.jpeg";
import SecHeader from "./SecHeader";

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
                <div className=" d-flex  d-lg-none align-items-center  me-2">
                  <IoBagOutline className="" size={24} />
                  <IoPersonOutline size={24} />
                </div>
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
                        Tira Red
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
                  <li className="nav-item me-2">
                    <Link to="/cart" className="headerIcon">
                      {" "}
                      <IoBagOutline size={24} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <IoPersonOutline size={24} className="" />
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
