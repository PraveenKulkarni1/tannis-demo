import React from "react";
import { Link } from "react-router-dom";
import "./hair.css";

const Hair = () => {
  return (
    <div>
      <ul className="dropdown-menu hairMenu dropdown-menu-pink">
        <div className="row">
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Hair Care
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Condtioner
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Dry Shampoo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Hair Oil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Hair serum
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Shampoo
              </Link>
            </li>
          </div>

          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Hair Styling
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Hair Gels & Waxes
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Hair Sprays & Mists
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Hair colour
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
                What's New
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Bestsellers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Sets & Bundles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Homegrown
              </Link>
            </li>
          </div>

          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Brands To Know
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Milk Shake
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Bestsellers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Forest Essentials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                COTRIL
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Homegrown
              </Link>
            </li>
          </div>
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Shop By Concern
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Hairfall & Hair Thning
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                D'you
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Dry & Frizzy Hair
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Split Ends
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Hair;
