import React, { useState } from "react";
import "./auth.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "./../assets/logo1.jpeg";
import { IoMdClose } from "react-icons/io";

function Login() {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="loginBg d-flex justify-content-center align-items-center py-lg-4"
      id="Get1Jump"
    >
      <div className="col-12 col-lg-4 col-md-8 col-sm-9 col-xl-4  p-3 my-3 my-lg-4 my-xl-4 my-md-3 my-sm-3">
        <div className="card p-4 shadow loginCard">
          <button className="close-btn" onClick={() => navigate("/")}>
            <IoMdClose size={24} />
          </button>
          <h4 className="text-center loginMain">
            {" "}
            WelCome to{" "}
            <NavLink className="navbar-brand navtira" to="/">
              <img src={logo1} className="loginLogo" />
            </NavLink>
          </h4>
          <h4 className="text-center loginMain">Sign up now</h4>
          <form
            action=""
            onSubmit={handleSubmit}
            className="px-2 px-sm-3 px-md-3 px-lg-5"
          >
            <div>
              <label className="form-label formLabel">Phone number</label>
              <div className="input-group mb-3 d-flex gap-2  p-0 p-sm-1 p-md-1 p-lg-1">
                <span className="input-group-text bg-white p-0 p-sm-1 p-md-1 p-lg-1">
                  +91
                </span>
                <input
                  type="text"
                  className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="text-center mb-3">
              <button
                className=" loginBtn
            "
                onClick={() => navigate("/login-otp")}
              >
                Send OTP
              </button>
              <div className="form-check my-3">
                <input
                  className="form-check-input signupCheckbox p-0 p-sm-1 p-md-1 p-lg-1"
                  type="checkbox"
                  id="flexCheckChecked"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  <span className="signUpSpan">
                    By continuing, you agree to Tannis’s
                  </span>
                  <Link to="/" className="singupLink">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link to="/" className="singupLink">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
