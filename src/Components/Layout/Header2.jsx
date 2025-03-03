import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import Brand from "./Brand";
import logo1 from "../../assets/logo1.jpeg";
import SecHeader from "./SecHeader";

const Header2 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
              {/* Navbar Toggler */}

              <div className=" d-flex justify-content-between navDf ">
                <div className="">
                  <NavLink className="navbar-brand navtira" to="/">
                    <img src={logo1} className="logoImg" />
                  </NavLink>
                </div>
              </div>

              <div
                className="collapse navbar-collapse p-3 tiraNavMain"
                id="navbarTogglerDemo01"
              >
                <NavLink className="navbar-brand  d-lg-none searchNav" to="/">
                  <img src={logo1} className="fLogoImg" />
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className=" container-fluid ttWidth"></div>
    </>
  );
};

export default Header2;
