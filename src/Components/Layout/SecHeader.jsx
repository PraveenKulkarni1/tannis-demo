import React from "react";
import "./secHeader.css";
import { Link } from "react-router-dom";
import WhatsNew from "./Navbar/WhatsNew";
import Makeup from "./Navbar/Makeup";
import Skin from "./Navbar/Skin";
import Hair from "./Navbar/Hair";
import Fragrance from "./Navbar/Fragrance";
import BathBody from "./Navbar/BathBody";
import ToolsAppn from "./Navbar/ToolsAppn";
import MomBoby from "./Navbar/MomBoby";
import Wellness from "./Navbar/Wellness";
import Minis from "./Navbar/Minis";
import Homegrown from "./Navbar/Homegrown";

const SecHeader = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="secNavHeader ">
          <nav className="navbar navbar-expand-lg  bg-body-tertiar">
            <div className="container">
              <ul className="navbar-nav">
                <li className="dropdown secDropdown mainDropdown">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Whats New
                  </Link>
                  <WhatsNew />
                </li>

                <li className="dropdown secDropdown mainDropdown">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Makeup
                  </Link>
                  <Makeup />
                </li>
                <li className="dropdown secDropdown mainDropdown">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Skin
                  </Link>
                  <Skin />
                </li>
                <li className="dropdown secDropdown mainDropdown">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hair
                  </Link>
                  <Hair />
                </li>
                <li className="dropdown secDropdown mainDropdown">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fragrance
                  </Link>
                  <Fragrance />
                </li>
                <li className="dropdown secDropdown mainDropdown">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Bath & Body
                  </Link>
                  <BathBody />
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    aria-expanded="false"
                  >
                    Tool & Appliances
                  </Link>
                  <ToolsAppn />
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    aria-expanded="false"
                  >
                    Mom & Baby
                  </Link>
                  <MomBoby />
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    aria-expanded="false"
                  >
                    Wellness
                  </Link>
                  <Wellness />
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    aria-expanded="false"
                  >
                    Minis
                  </Link>
                  <Minis />
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="nav-link px-3  bg-white cardTextp"
                    aria-expanded="false"
                  >
                    Homegrown
                  </Link>
                  <Homegrown />
                </li>
              </ul>
              <div
                className="collapse navbar-collapse"
                id="navbarMegaMenu"
              ></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SecHeader;
