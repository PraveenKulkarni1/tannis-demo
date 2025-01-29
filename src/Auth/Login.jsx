import React, { useState } from "react";
import "./auth.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "./../assets/logo1.jpeg";
import { IoMdClose } from "react-icons/io";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
          <form
            action=""
            onSubmit={handleSubmit}
            className="px-2 px-sm-3 px-md-3 px-lg-5"
          >
            <div className="mb-3">
              <label className="form-label formLabel">Email address</label>
              <input
                type="email"
                className="form-control  p-0 p-sm-1 p-md-1 p-lg-1"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label formLabel">Password</label>
              <input
                type="password"
                className="form-control  p-0 p-sm-1 p-md-1 p-lg-1"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-center mb-3">
              <button
                className=" loginBtn
            "
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <label className="form-label">
                <span className="formLabel"> Forgot </span>
                <Link to="/forget-password">Username/Password</Link>?{" "}
              </label>
              <label className="form-label">
                <span className="formLabel">Don't have an account?</span>
                <Link to="/register">Sign up</Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
