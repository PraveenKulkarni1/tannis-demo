import React from "react";
import { Link } from "react-router-dom";
import lip from "../../assets/lipstick.jpg";
import "./header.css";
import "./brand.css";

const Brand = () => {
  const brandData = {
    img: "",
  };

  const boxes = Array.from({ length: 18 }, (_, i) => i + 1);
  return (
    <div>
      <div className="dropdown-menu tiraNavMenu mt-4">
        <ul>
          <li>
            <input
              className="form-control searchSlide "
              type="search"
              placeholder="Search Brands"
              aria-label="Search"
            />
          </li>

          <div className="searchSlide">
            <li>
              <p className="dropdown-item" href="#">
                #
              </p>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                18.12 Man-made
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                23 Yards
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                3TENX
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                4711
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                50Ap
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                82E
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                9Skin
              </a>
            </li>
          </div>
        </ul>
        <div className="d-flex flex-column gap-2 brandBoxMain">
          <div className="d-flex col-md-2 gap-3">
            <ul>
              <li>
                <Link to="/" className="dropdown-item">
                  Tira Love
                </Link>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <Link to="/" className="dropdown-item">
                  Top Brands
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/" className="dropdown-item ">
                  Newly Added Brands
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link to="/" className="dropdown-item ">
                  Featured Brands
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/" className="dropdown-item ">
                Tannis Red
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/" className="dropdown-item ">
                  Homegrown
                </Link>
              </li>
            </ul>
          </div>

          <div className="brandContainer ">
            {boxes.map((box) => (
              <div className="brandBox col-md-2 col-lg-4" key={box}>
                <img src={lip} alt={`Box ${box}`} className="box-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
