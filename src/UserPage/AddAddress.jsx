import React, { useState } from "react";
import "./userProfile.css";
import "./addAddress.css";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddAddress() {
  const navigate = useNavigate();

  const [houseNo, setHouseNo] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handlePincodeChange = async (e) => {
    const pin = e.target.value;
    setPincode(pin);

    if (pin.length === 6) {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${pin}`
        );
        const data = response.data[0];

        if (data.Status === "Success") {
          const postOffice = data.PostOffice[0];
          setCity(postOffice.District || "");
          setState(postOffice.State || "");
          setCountry("India");
        } else {
          console.warn("Invalid Pincode");
          setCity("");
          setState("");
          setCountry("");
        }
      } catch (error) {
        console.error("Error fetching pincode info:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // ✅ Phone is required
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      toast.error("Invalid phone number.");
      setLoading(false);
      return;
    }

    // ✅ Email is optional but must be valid if entered
    if (email && !isValidEmail(email)) {
      setError("Please enter a valid email address.");
      toast.error("Invalid email format.");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const payload = {
        name: fullName,
        address1: houseNo,
        address2: buildingName,
        city: city,
        pin_code: pincode,
        state: state,
        phone: phone,
        country: country,
        type_of_address: selectedPlace,
        email: email || "",
      };

      const res = await axios.post(
        "https://tannis.in/api/shipping-address/",
        payload,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      toast.success("Address Saved Successfully");
      navigate("/address");
      console.log("Address saved:", res.data);
    } catch (error) {
      console.error("Error saving address:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <UserMemu />
          </div>
          <div className="col-md-8">
            <h3 className="userMenuh1 my-2 my-xl-5">My Address</h3>
            <div className="profile-container">
              <h2 className="mb-3 adrsHeading">Add New Address</h2>
              <div className="col-12 horiRow my-3"></div>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
              {error && (
                <div className="alert alert-danger py-2 text-center">
                  {error}
                </div>
              )}

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Flat No/House No/Building No{" "}
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Building Name/Street/Society{" "}
                    <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={buildingName}
                    onChange={(e) => setBuildingName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Pincode <span className="proErr">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control py-2"
                    value={pincode}
                    onChange={handlePincodeChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    City <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    State <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Country <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="gender-container mb-3">
                <button
                  type="button"
                  className={`gender-button ${
                    selectedPlace === "Home" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("Home")}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={`gender-button ${
                    selectedPlace === "Work" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("Work")}
                >
                  Work
                </button>
                <button
                  type="button"
                  className={`gender-button ${
                    selectedPlace === "Other" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("Other")}
                >
                  Other
                </button>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Full Name <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">
                    Contact <span className="proErr">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="adrsLabel1">Email (Optional)</label>
                  <input
                    type="email"
                    className="form-control py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-md-6 form-check my-3">
                  <input
                    className="form-check-input signupCheckbox"
                    type="checkbox"
                    id="flexCheckChecked"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    <span className="signUpSpan">
                      Make this your default address
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="userPbtn my-3"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddAddress;
