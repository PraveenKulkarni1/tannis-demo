import React from "react";
import { Link } from "react-router-dom";

const WhatsNew = () => {
  return (
    <>
      <ul className="dropdown-menu secNavMegMenu dropdown-menu-pink">
        <div className="row">
          <div className="col-md-4 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                New In Makeup
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                New In Skin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                New In Skin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                New In Hair
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                New In Fragrance
              </Link>
            </li>
          </div>

          <div className="col-md-6 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Tranding
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Skincare Picks For A Winter Glow
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Nude Lipsticks To Cop Now
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Haircare Stapless To Combat Dryness
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Floral And Fruity Fragrances For Daily Spritzing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Glittery Lids,But Make It Easy
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
};

export default WhatsNew;
