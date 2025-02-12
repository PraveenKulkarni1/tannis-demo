import React from "react";
import "./fragrance.css";
import { Link } from "react-router-dom";

const Fragrance = () => {
  return (
    <div>
      <ul className="dropdown-menu fragranceMenu dropdown-menu-pink">
        <div className="row">
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Women's Fragrance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Perfume (EDT & EDP)
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Body Mists & Sparys
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Deodorants & Roll-One
              </Link>
            </li>
          </div>

          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Unisex Fragrance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Unisex Perfumes
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Unisex Mists & Sparys
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Unisex Deodoeants & Roll-Ons
              </Link>
            </li>
          </div>
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Shop
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
                Gift Sets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Sets & Bundles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Tannis Loves
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
                Gucci
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Jo Malone Landon
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Elizabeth Arden
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Jimmy Choo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Giorgio Armani
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Fragrance;
