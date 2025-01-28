import React from "react";
import "./makeup.css";
import { Link } from "react-router-dom";
const Makeup = () => {
  return (
    <div>
      <ul className="dropdown-menu secMakeup dropdown-menu-pink">
        <div className="row">
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Face
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Blush
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Bronzer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Compact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Contour
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Foundation
              </Link>
            </li>
          </div>

          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Eye
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Eye Makeup Remover
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Eyebrow Enhancer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                False Eyelashes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Eyeliner
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Eye Shadow
              </Link>
            </li>
          </div>
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Lip
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Balm
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Crayon
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Gloss
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Liner
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Stain
              </Link>
            </li>
          </div>

          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Tools & Brushes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Brush Sets
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Eye Brushes & Eyelash Curlers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Face Brush
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Lip Brush
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Makeup Pouch
              </Link>
            </li>
          </div>
          <div className="col-md-2 secNav">
            <li className="nav-item">
              {" "}
              <Link to="/" className=" nav-link px-4">
                Nail
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Nail Art Kits
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Nail Care
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Nail Polishes
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
                Kiko Milano
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Nails Our Way
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Makeup Revolution
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Etude House
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-4">
                Dear Dahlia
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Makeup;
