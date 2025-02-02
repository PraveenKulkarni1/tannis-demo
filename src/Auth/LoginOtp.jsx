import React, { useState, useRef } from "react";
import "./auth.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "./../assets/logo1.jpeg";
import { IoMdClose } from "react-icons/io";

function LoginOtp() {
  const [phone, setPhone] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

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
          <NavLink className="navbar-brand navtira text-center " to="/">
            <img src={logo1} className="loginLogo" alt="Logo" />
          </NavLink>
          <h4 className="text-center loginMain my-2 my-xl-3 my-lg-3 my-md-3 my-sm-3">
            {" "}
            Almost there...{" "}
          </h4>
          <p className="text-center loginOtpP">
            Please enter the 4 digit OTP that we
            <br />
            just sent on +91 ******0756
          </p>

          <form
            action=""
            onSubmit={handleSubmit}
            className="px-2 px-sm-3 px-md-3 px-lg-5"
          >
            <div className="text-center mb-3">
              <label className="form-label loginMain">OTP</label>
              <div className="text-center d-flex gap-5 justify-content-center align-items-center">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    />
                  ))}
              </div>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <Link to="/login" className="logineditNum1">
                Edit Number
              </Link>
              <Link to="/login-otp" className="logineditNum2">
                Resend OTP in 45s
              </Link>
            </div>
            <div className="text-center mb-3">
              <button
                className=" loginBtn w-75
            "
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginOtp;
