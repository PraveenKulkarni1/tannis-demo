import React, { useState, useEffect } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import Brand from "./Brand";
import logo1 from "../../assets/logo1.jpeg";
import SecHeader from "./SecHeader";
import { IoIosHeartEmpty } from "react-icons/io";
import { Badge } from "antd";
import { FaSearch } from "react-icons/fa";
import { useUserContext } from "../contextApi/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGetCart } from "../contextApi/GetCart";
import axios from "axios";
import SeachForm from "./../Form/SeachForm";
const Header = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useUserContext();
  // const [cart] = useGetCart();
  const [cart, setCart] = useState([]);

  const [data, setData] = useState([]);
  const [values, setValues] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // ✅ fix typo

    try {
      // ✅ pass search value as query param
      const { data } = await axios.get(
        `https://tannis.in/api/search-product/${values}`
      );
      setData(data);
      console.log(data.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);
  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://tannis.in/api/get-cart", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setCart(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const cartData = cart?.data?.data?.carts;

  const handelLogout = () => {
    setUserId({ userId: null, token: "" });
    localStorage.removeItem("");
    toast.success("Logout successfully");
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 trackDetails">
            <div className="d-flex justify-content-end gap-3 my-1">
              <Link to="/order" className="trakNav ">
                Track Order
              </Link>
              <Link to="/write-to-us" className="trakNav trackRel">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
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

                <ul className="d-flex d-lg-none gap-1">
                  <li className="nav-item me-2">
                    <Badge
                      count={0}
                      style={{
                        background: "none",
                        color: "black",
                        border: "none",
                      }}
                    >
                      <Link to="/wishlist" className="headerIcon">
                        {" "}
                        <IoIosHeartEmpty size={20} />
                      </Link>
                    </Badge>
                  </li>
                  <li className="nav-item me-2">
                    <Badge
                      count={cartData?.length}
                      style={{ background: "none", color: "black" }}
                    >
                      <Link to="/cart" className="headerIcon">
                        {" "}
                        <IoBagOutline size={20} />
                      </Link>
                    </Badge>
                  </li>

                  <li className="nav-item me-2">
                    <li className="nav-item dropdown">
                      <IoPersonOutline size={24} />
                      <ul className="dropdown-menu navProDrop">
                        <li>
                          <Link to="/profile" className="dropdown-item">
                            Personal Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/order" className="dropdown-item">
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link to="/address" className="dropdown-item">
                            Addresses
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Tannis Treats
                          </Link>
                        </li>
                        <li>
                          <Link to="/refer" className="dropdown-item">
                            Refer & Earn
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Top Shelf
                          </Link>
                        </li>

                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <li>
                            <Link to="/write-to-us" className="dropdown-item">
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq" className="dropdown-item">
                              Help & Support
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/private-policy"
                              className="dropdown-item"
                            >
                              Privace Policy
                            </Link>
                          </li>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        {!userId ? (
                          <>
                            {" "}
                            <li>
                              <Link to="/register" className="dropdown-item ">
                                SignUp
                              </Link>
                            </li>
                            <li>
                              <Link to="/login" className="dropdown-item ">
                                Login
                              </Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link
                                to="/login"
                                className="dropdown-item HlogOut"
                                onClick={handelLogout}
                              >
                                Logout
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </li>
                </ul>
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
                      <Link to="/tannis-red" className="nav-link navBorder ">
                        Tannis Red
                      </Link>
                    </li>

                    <li className="nav-item cardTextp">
                      <Link to="/offers" className="nav-link navBorder ">
                        Offers
                      </Link>
                    </li>
                    <li className="nav-item cardTextp">
                      <Link to="/" className="nav-link navBorder ">
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
                    {/* <form className="d-flex" role="search">
                      <input
                        className="form-control me-2 customSearch "
                        type="search"
                        placeholder="Searchcsv"
                        aria-label="Search"
                      />
                    </form> */}
                    <div className="bannerIpOne">
                      <div className="bannerIp ">
                        <SeachForm />
                      </div>
                    </div>
                  </li>
                  <ul className="d-flex gap-1">
                    <li className="nav-item me-2">
                      <Badge
                        count={1}
                        style={{ background: "none", color: "black" }}
                      >
                        <Link to="/wishlist" className="headerIcon">
                          {" "}
                          <IoIosHeartEmpty size={20} />
                        </Link>
                      </Badge>
                    </li>

                    <li className="nav-item me-2">
                      <Badge
                        count={cartData?.length}
                        style={{
                          background: "none",
                          color: "black",
                          fontsize: "15px",
                        }}
                      >
                        <Link to="/cart" className="headerIcon">
                          {" "}
                          <IoBagOutline size={20} />
                        </Link>
                      </Badge>
                    </li>

                    <li className="nav-item me-2">
                      <li className="nav-item dropdown">
                        <IoPersonOutline size={24} />
                        <ul className="dropdown-menu navProDrop">
                          <li>
                            <Link to="/profile" className="dropdown-item">
                              Personal Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/order" className="dropdown-item">
                              Orders
                            </Link>
                          </li>
                          <li>
                            <Link to="/address" className="dropdown-item">
                              Addresses
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                              Tannis Treats
                            </Link>
                          </li>
                          <li>
                            <Link to="/refer" className="dropdown-item">
                              Refer & Earn
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                              Top Shelf
                            </Link>
                          </li>

                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <li>
                              <Link to="/write-to-us" className="dropdown-item">
                                Contact Us
                              </Link>
                            </li>
                            <li>
                              <Link to="/faq" className="dropdown-item">
                                Help & Support
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/private-policy"
                                className="dropdown-item"
                              >
                                Privace Policy
                              </Link>
                            </li>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>

                          {!userId ? (
                            <>
                              {" "}
                              <li>
                                <Link to="/register" className="dropdown-item ">
                                  SignUp
                                </Link>
                              </li>
                              <li>
                                <Link to="/login" className="dropdown-item ">
                                  Login
                                </Link>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <Link
                                  to="/login"
                                  className="dropdown-item HlogOut"
                                >
                                  Logout
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </li>
                    </li>
                  </ul>
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
              <SeachForm />
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid tWidth"></div>
    </>
  );
};

export default Header;
