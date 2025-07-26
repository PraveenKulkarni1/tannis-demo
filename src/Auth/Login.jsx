import React, { useState } from "react";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "./../assets/logo1.jpeg";
import { IoMdClose } from "react-icons/io";
import { useUserContext } from "../Components/contextApi/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useUserContext();

  // Regex validators
  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone); // 10-digit phone number

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate email or phone
    if (!isValidEmail(email) && !isValidPhone(email)) {
      setError("Please enter a valid email or phone number.");
      setLoading(false);
      return;
    }

    try {
      const requestBody = { email_or_phone: email };

      const response = await fetch("https://tannis.in/api/sign-up/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        console.log("OTP response:", data); // ✅ Log the response to see it in devtools

        // ✅ Store full OTP data in context
        setUserData({
          userId: data.userId,
          otp: data.otp,
          customerId: data["customer-id"],
        });

        // ✅ Store it in localStorage
        localStorage.setItem(
          "otpData",
          JSON.stringify({
            userId: data.userId,
            otp: data.otp,
            customerId: data["customer-id"],
          })
        );

        navigate("/login-otp", {
          state: {
            userId: data.userId,
            otp: data.otp,
            customerId: data["customer-id"],
          },
        }); // Redirect to OTP page
      } else {
        setError(data.message || "An error occurred, please try again.");
      }
    } catch (err) {
      setError("Something went wrong, please check your connection.");
    } finally {
      setLoading(false);
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
          <h4 className="text-center loginMain">
            Welcome to{" "}
            <NavLink className="navbar-brand navtira" to="/">
              <img src={logo1} className="loginLogo" alt="logo" />
            </NavLink>
          </h4>
          <h4 className="text-center loginMain">Sign up now</h4>
          <form
            onSubmit={handleSubmit}
            className="px-2 px-sm-3 px-md-3 px-lg-5"
          >
            <div>
              <label className="form-label formLabel">Email/Mobile</label>
              <div className="input-group mb-3 d-flex gap-2 p-0 p-sm-1 p-md-1 p-lg-1">
                <input
                  type="text"
                  className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="text-center mb-3">
              <button type="submit" className="loginBtn" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>

              <div className="form-check my-3">
                <input
                  className="form-check-input signupCheckbox"
                  type="checkbox"
                  id="flexCheckChecked"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  <span className="signUpSpan">
                    By continuing, you agree to Tannis’s{" "}
                  </span>
                  <NavLink to="/" className="singupLink">
                    Terms of Use
                  </NavLink>{" "}
                  and{" "}
                  <NavLink to="/" className="singupLink">
                    Privacy Policy
                  </NavLink>
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
