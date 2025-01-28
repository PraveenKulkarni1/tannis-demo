import React from "react";
import { Link } from "react-router-dom";
import "./bathBody.css";

const BathBody = () => {
  return (
    <div>
      {" "}
      <div>
        <ul className="dropdown-menu bathMenu dropdown-menu-pink">
          <div className="row">
            <div className="col-md-2 secNav">
              <li className="nav-item">
                {" "}
                <Link to="/" className=" nav-link px-4">
                  Bath & Shower
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Bath Salts
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Body Scrubs & Exfoliants
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Soap
                </Link>
              </li>
            </div>

            <div className="col-md-2 secNav">
              <li className="nav-item">
                {" "}
                <Link to="/" className=" nav-link px-4">
                  Body Care
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Body Butter
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Body Lotions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Taic
                </Link>
              </li>
            </div>
            <div className="col-md-2 secNav">
              <li className="nav-item">
                {" "}
                <Link to="/" className=" nav-link px-4">
                  Hygiene Essentials
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Hands Sanitizer
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Intimate Care
                </Link>
              </li>
            </div>

            <div className="col-md-2 secNav">
              <li className="nav-item">
                {" "}
                <Link to="/" className=" nav-link px-4">
                  Shop By
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Whats New
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Bestsellers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Minis
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-4">
                  Sets & Bundles
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BathBody;
