import React, { useState, useRef, useEffect } from "react";
import "./auth.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "./../assets/logo1.jpeg";
import { IoMdClose } from "react-icons/io";
import { useUserContext } from "../Components/contextApi/UserContext";

function LoginOtp() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [phone, setPhone] = useState("");
  const [otpData, setOtpData] = useState(null); // ✅ Store full OTP data
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { userId: contextUserId } = useUserContext();
  const [userId, setUserId] = useState(null);

  const [resendTimer, setResendTimer] = useState(45);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("otpData");

    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setUserId(parsed.userId || contextUserId);
        setPhone(parsed.phone || "");
        setOtpData(parsed); // ✅ Store all OTP data
        console.log("Retrieved OTP data:", parsed);
      } catch (err) {
        console.error("Failed to parse otpData:", err);
      }
    } else {
      console.warn("No OTP data found in localStorage");
      navigate("/login");
    }
  }, [contextUserId, navigate]);

  const maskPhoneNumber = (phoneNumber) => {
    if (phoneNumber && phoneNumber.length === 10) {
      return "******" + phoneNumber.slice(-4);
    }
    return phoneNumber;
  };

  useEffect(() => {
    if (resendTimer === 0) {
      handleResendOtp();
      return;
    }
    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleResendOtp = async () => {
    if (isResending) return;
    setIsResending(true);
    console.log("Resending OTP...");
    try {
      const data = { userId: userId };
      const response = await fetch("https://tannis.in/api/resend-otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.status === "success") {
        console.log("OTP resent successfully:", result);
      } else {
        console.log("Failed to resend OTP:", result.message);
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    } finally {
      setResendTimer(45);
      setIsResending(false);
    }
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (userId) {
      const data = {
        userId: userId,
        otp: otpCode,
      };
      try {
        const response = await fetch("https://tannis.in/api/verify-otp/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok && result.status === "success") {
          console.log("OTP verified successfully:", result);
          localStorage.setItem("token", result.token);
          navigate("/");
        } else {
          console.log("OTP verification failed:", result.Message);
        }
      } catch (error) {
        console.error("Error during OTP verification:", error);
      }
    } else {
      console.log("User ID is missing.");
    }
  };

  return (
    <section
      className="loginBg d-flex justify-content-center align-items-center py-lg-4"
      id="Get1Jump"
    >
      <div className="col-12 col-lg-4 col-md-8 col-sm-9 col-xl-4 p-3 my-3 my-lg-4 my-xl-4 my-md-3 my-sm-3">
        <div className="card p-4 shadow loginCard">
          <button className="close-btn" onClick={() => navigate("/")}>
            <IoMdClose size={24} />
          </button>
          <NavLink className="navbar-brand navtira text-center" to="/">
            <img src={logo1} className="loginLogo" alt="Logo" />
          </NavLink>
          <h4 className="text-center loginMain my-2 my-xl-3 my-lg-3 my-md-3 my-sm-3">
            Almost there...
          </h4>
          <p className="text-center loginOtpP">
            Please enter the 4 digit OTP that we
            <br />
            just sent on +91 {maskPhoneNumber(phone)}
          </p>

          <form
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
              {resendTimer !== 0 && (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer !== 0 || isResending}
                  className="logineditNum2"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "inherit",
                    cursor:
                      resendTimer === 0 && !isResending ? "pointer" : "default",
                  }}
                >
                  {`Resend OTP in ${resendTimer}s`}
                </button>
              )}
            </div>

            <div className="text-center mb-3">
              <button className="loginBtn w-75">Verify OTP</button>
            </div>
          </form>
          {/* ✅ Debug View of OTP Data */}
          {otpData && (
            <div
              className="bg-light p-2 mb-3 rounded font-bold text-center "
              style={{ fontSize: "14px" }}
            >
              <p>OTP: {otpData.otp}</p>

              {otpData.phone && <p>Phone: {otpData.phone}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginOtp;
