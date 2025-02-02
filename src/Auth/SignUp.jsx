import React, { useState } from "react";
import "./auth.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import logo1 from "./../assets/logo1.jpeg";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section
      className=" signupBg d-flex justify-content-center py-lg-4"
      id="Get1Jump"
    >
      <div className="col-12 col-lg-5 col-md-8 col-sm-9 col-xl-5  p-3 my-3 my-lg-4 my-xl-4 my-md-3 my-sm-3">
        <div className="card p-5 p-xl-4 p-lg-4 p-md-4 p-sm-3 shadow signUpCard">
          {/* Close Icon */}
          <button
            className="close-btn"
            onClick={() => navigate("/")} // Navigate back on close
          >
            <IoMdClose size={24} />
          </button>

          <NavLink className="navbar-brand navtira text-center " to="/">
            <img src={logo1} className="loginLogo" alt="Logo" />
          </NavLink>
          <h4 className="text-center loginMain my-2 my-xl-3 my-lg-3 my-md-3 my-sm-3">
            {" "}
            Almost there...{" "}
          </h4>
          <form
            onSubmit={handleSubmit}
            className="px-2 px-sm-3 px-md-3 px-lg-5"
          >
            <div className="row ">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label formLabel">Fisrt Name</label>
                <input
                  type="text"
                  className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label formLabel">last Name</label>
                <input
                  type="text"
                  className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label formLabel">Email Address</label>
              <input
                type="email"
                className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label formLabel">Password</label>
              <input
                type="password"
                className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label formLabel">Phone number</label>
              <div className="input-group mb-3 d-flex gap-2  p-0 p-sm-1 p-md-1 p-lg-1">
                <span className="input-group-text bg-white p-0 p-sm-1 p-md-1 p-lg-1">
                  +91
                </span>
                <input
                  type="text"
                  className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row g-2 mb-3">
              <div className="col-12 col-sm-4">
                <div className="form-check">
                  <input
                    className="form-check-input signUpRadio"
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    checked={selectedGender === "Male"}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  />
                  <label className="form-check-label formLabel" htmlFor="male">
                    Male
                  </label>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="form-check">
                  <input
                    className="form-check-input signUpRadio"
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    checked={selectedGender === "Female"}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  />
                  <label
                    className="form-check-label formLabel"
                    htmlFor="female"
                  >
                    Female
                  </label>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="form-check">
                  <input
                    className="form-check-input signUpRadio"
                    type="radio"
                    name="gender"
                    id="nonBinary"
                    value="Non-Binary"
                    checked={selectedGender === "Non-Binary"}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  />
                  <label
                    className="form-check-label formLabel"
                    htmlFor="nonBinary"
                  >
                    Non-Binary
                  </label>
                </div>
              </div>
            </div>

            <div className="form-check mb-3">
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

            <div className="text-center mb-3">
              <button className="loginBtn w-100">Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
