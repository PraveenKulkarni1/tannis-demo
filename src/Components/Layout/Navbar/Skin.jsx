import React from "react";
import "./skin.css";
import { Link } from "react-router-dom";

const Skin = () => {
  return (
    <div>
      <ul className="dropdown-menu skinMenu dropdown-menu-pink">
        <div className="row">
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Cleansers & Exfoliators
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Face Washes & Cleansers
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Face Wipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Makeup Remover
              </Link>
            </li>
          </div>

          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Lipcare
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                LipBalm
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                LipScrub
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Mask
              </Link>
            </li>
          </div>
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Toners & Mist
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Toner
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Mist
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
                Minis
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Sets & Bundies
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
                Sulwahsoo
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                D'you
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Clarins
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                COSRX
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
                Fine Lines & Wrinkles
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Sensitive Skin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Acne
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Dullness
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Dryness
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Skin;
