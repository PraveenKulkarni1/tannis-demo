import React, { useState, useEffect } from "react";
import "./userProfile.css";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { MdPhotoCamera } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [imageFile, setImageFile] = useState(null); // State to hold selected image file

  const [selectedImage, setSelectedImage] = useState(null);

  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);

  const [showMobileOtpModal, setShowMobileOtpModal] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileOtpError, setMobileOtpError] = useState("");

  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtpError, setEmailOtpError] = useState("");

  const navigate = useNavigate();

  // Effect hook to load user data if token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Make API call to fetch user details
      axios
        .get("https://tannis.in/api/get-customer-details/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            const userData = response.data.data;

            setFirstName(userData.user.first_name);
            setLastName(userData.user.last_name);
            setPhone(userData.phone);
            setEmail(userData.user.email);
            setDate(userData.dob);
            setSelectedGender(userData.gender);
            setUserImage(userData.image);
          } else {
            console.error("Failed to retrieve user details.");
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []); // Empty dependency array to run only on component mount

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (token) {
      // Prepare data for updating user details
      const updatedUserDetails = {
        gender: selectedGender,
        dob: date,
        phone: phone,
        email: email,
        image: userImage,
        user: {
          first_name: firstName,
          last_name: lastName,
        },
      };

      // setFirstName("");
      // setLastName("");
      // setPhone("");
      // setEmail("");
      // setDate("");
      // setSelectedGender("");
      // setUserImage("");

      // Make PUT request to update user details
      axios
        .put("https://tannis.in/api/update-user-details/", updatedUserDetails, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            // ✅ Save updated info in localStorage
            const updatedUser = {
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              email: email,
              dob: date,
              gender: selectedGender,
              image: userImage,
            };
            localStorage.setItem("userData", JSON.stringify(updatedUser));

            toast.success("Profile updated successfully");
          } else {
            toast.error("Failed toProfile update");
            console.error("Failed to update user details.");
          }
        })
        .catch((error) => {
          console.error("Error updating user details:", error);
        });
    }
  };

  // const handleImageChange = (e) => {
  //   setImageFile(e.target.files[0]);
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageUpload = () => {
    const token = localStorage.getItem("token");
    if (token && selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      axios
        .put("https://tannis.in/api/update-customer-profile-image/", formData, {
          headers: {
            Authorization: `Token ${token}`,

            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            toast.success("Profile image updated successfully!");
            // Refresh image on the page
            setUserImage(response.data.image); // this assumes the API returns updated image path

            setShowModal(false);
            setSelectedImage(null);
          } else {
            toast.error("Failed to update profile image.");
            console.error("Failed to update profile image.");
          }
        })
        .catch((error) => {
          toast.error("Error updating profile image.");
          console.error("Error updating profile image:", error);
        });
    } else {
      toast.error("Please select an image before uploading.");
    }
  };

  // const handleImageUpload = () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token, "-----");
  //   if (token && imageFile) {
  //     const formData = new FormData();
  //     formData.append("image", imageFile);

  //     // Make PUT request to update user profile image
  //     axios
  //       .put("https://tannis.in/api/update-customer-profile-image/", formData, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       })

  //       .then((response) => {
  //         if (response.data.status === "success") {
  //           // Successfully updated profile image
  //           console.log("Profile image updated successfully!");
  //           setUserImage(URL.createObjectURL(imageFile)); // Update the image on success
  //           setShowModal(false); // Close modal after update
  //           alert("Profile Image Upload Successfully");
  //         } else {
  //           console.error("Failed to update profile image.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error updating profile image:", error);
  //       });
  //   }
  // };
  const yourToken = localStorage.getItem("token"); // if stored there
  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const handlePhoneEdit = () => {
    setIsPhoneEditable(!isPhoneEditable);
  };

  const handleEmailEdit = () => {
    setIsEmailEditable(!isEmailEditable);
  };

  // mobile update
  const handleMobileSave = () => {
    const token = localStorage.getItem("token");

    // Send OTP to the mobile
    axios
      .post(
        "https://tannis.in/api/otp-phone/",
        { phone: phone },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setMobileOtpSent(true); // OTP sent successfully
          setShowMobileOtpModal(true); // Show the OTP modal
        } else {
          console.error("Failed to send OTP.");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleMobileOtpVerify = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "https://tannis.in/api/update-phone/",
        { phone: phone, otp: mobileOtp },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          // mobile updated successfully
          console.log("Email verified and updated!");
          setShowMobileOtpModal(false); // Close OTP modal
        } else {
          setMobileOtpError("Invalid OTP, please try again.");
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setMobileOtpError("Error verifying OTP, please try again.");
      });
  };

  //email update
  const handleEmailSave = () => {
    const token = localStorage.getItem("token");

    // Send OTP to the email
    axios
      .post(
        "https://tannis.in/api/otp-email/",
        { email: email },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          console.log(response.data);
          setEmailOtpSent(true); // OTP sent successfully
          setShowEmailOtpModal(true); // Show the OTP modal
        } else {
          console.error("Failed to send OTP.");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleEmailOtpVerify = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "https://tannis.in/api/update-email/",
        { email: email, otp: emailOtp },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          // Email updated successfully
          toast.success("Email verified and updated!");
          console.log("Email verified and updated!");
          setShowEmailOtpModal(false); // Close OTP modal
        } else {
          setEmailOtpError("Invalid OTP, please try again.");
          toast.error("Invalid OTP, please try again.");
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setEmailOtpError("Error verifying OTP, please try again.");
      });
  };

  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <UserMemu />
          </div>
          <div className="col-md-8">
            <h3 className="userMenuh1 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
              My Profile
            </h3>
            <div className="profile-container">
              <h2 className="mb-3">Personal photo</h2>
              {userImage ? (
                <img
                  src={`https://tannis.in${userImage}`}
                  alt="User"
                  className="profile-icon mb-3"
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                />
              ) : (
                <IoPersonOutline size={70} className="profile-icon mb-3" />
              )}
              <span className="camera-icon" onClick={() => setShowModal(true)}>
                <MdPhotoCamera className="mt-3 porfCamera" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
              <div className="gender-container mb-3">
                <button
                  className={`gender-button ${
                    selectedGender === "male" ? "active" : ""
                  }`}
                  onClick={() => setSelectedGender("male")}
                >
                  Male
                </button>
                <button
                  className={`gender-button ${
                    selectedGender === "female" ? "active" : ""
                  }`}
                  onClick={() => setSelectedGender("female")}
                >
                  Female
                </button>
                <button
                  className={`gender-button ${
                    selectedGender === "nonBinary" ? "active" : ""
                  }`}
                  onClick={() => setSelectedGender("nonBinary")}
                >
                  Non Binary
                </button>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label className="userPlabel">FirstName</label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label className="userPlabel">LastName</label>
                  <input
                    type="text"
                    className="form-control py-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="userPlabel">Birth Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              {/* Phone Input Section */}
              <div className="mb-3">
                <label className="userPlabel d-flex justify-content-between w-100 pt-1">
                  <label className="pb-1">Mobile Number</label>
                  <label
                    className="text-primary pb-1"
                    style={{ cursor: "pointer" }}
                    onClick={handlePhoneEdit}
                  >
                    {!isPhoneEditable ? "Edit" : ""}
                  </label>
                </label>

                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isPhoneEditable}
                    style={{ width: isPhoneEditable ? "80%" : "100%" }} // Adjust width based on edit mode
                    required
                  />
                  {isPhoneEditable && (
                    <>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={handleMobileSave} // Trigger the OTP sending
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => setIsPhoneEditable(false)} // Cancel edit
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Email Input Section */}
              <div className="mb-3">
                <label className="userPlabel d-flex justify-content-between w-100 ">
                  <label className="pb-1">Email</label>
                  <label
                    className="text-primary pb-1"
                    style={{ cursor: "pointer" }}
                    onClick={handleEmailEdit}
                  >
                    {!isEmailEditable ? "Edit" : ""}
                  </label>
                </label>

                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="email"
                    className="form-control py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEmailEditable}
                    style={{ width: isEmailEditable ? "80%" : "100%" }} // Adjust width based on edit mode
                    required
                  />
                  {isEmailEditable && (
                    <>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={handleEmailSave} // Trigger the OTP sending
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => setIsEmailEditable(false)} // Cancel edit
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="dCenter1">
                <button className="userPbtn my-3">Save</button>
              </div>

              <div className="col-12 horiRow "></div>
              <div className="my-3">
                <div className="dropdown mb-1">
                  <Link
                    className={`filDropText text-start d-flex justify-content-between align-items-center   ${
                      dropdownOpen1 ? "show" : ""
                    }`}
                    onClick={toggleDropdown1}
                  >
                    Manage Account
                    {dropdownOpen1 ? (
                      <FaChevronUp className="ms-2 FaCheColor" />
                    ) : (
                      <FaChevronDown className="ms-2 FaCheColor" />
                    )}
                  </Link>
                  <ul
                    className={`dropdown-menu border-0 ${
                      dropdownOpen1 ? "show" : ""
                    }`}
                  >
                    <Link to="/" className="deleteAccount">
                      Delete Account
                    </Link>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="text-center my-2">
          <Modal.Title>
            <span className="text-center">Change Profile Photo</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Hidden File Input */}
          <input
            type="file"
            id="fileInput"
            className="d-none"
            onChange={handleImageChange}
          />

          {/* Upload Button (Triggers File Input) */}
          <div className="d-flex justify-content-center align-items-center flex-column gap-3">
            {/* <button
              className="d-flex gap-2 justify-content-center align-items-center userPbtn2 w-75"
              onClick={() => document.getElementById("fileInput").click()}
            
            >
              <CiImageOn size={20} /> Upload Photo
            </button> */}
            <button
              className="d-flex gap-2 justify-content-center align-items-center userPbtn2 w-75"
              onClick={() => {
                document.getElementById("fileInput").click();
                handleImageUpload();
              }}
            >
              <CiImageOn size={20} /> Upload Photo
            </button>

            {/* <button
              className="d-flex gap-2 justify-content-center align-items-center userRemovebtn w-75"
              onClick={handleImageUpload} // Handle image upload
            >
              <AiOutlineDelete size={20} />
              Remove Image
            </button> */}

            <button
              className="d-flex gap-2 justify-content-center align-items-center userRemovebtn w-75"
              onClick={() => {
                setSelectedImage(null); // remove image from state
                handleImageUpload(); // optional: sync with server
              }}
            >
              <AiOutlineDelete size={20} />
              Remove Image
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* mobile OTP Modal */}
      <Modal
        show={showMobileOtpModal}
        onHide={() => setShowMobileOtpModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Verify OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mobileOtpSent ? (
            <div>
              <label>Enter OTP</label>
              <input
                type="text"
                className="form-control"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              {mobileOtpError && (
                <span className="text-danger">{mobileOtpError}</span>
              )}
            </div>
          ) : (
            <p>An OTP has been sent to your email.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowMobileOtpModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleMobileOtpVerify}>
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Email OTP Modal */}
      <Modal
        show={showEmailOtpModal}
        onHide={() => setShowEmailOtpModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Verify OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emailOtpSent ? (
            <div>
              <label>Enter OTP</label>
              <input
                type="text"
                className="form-control"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              {emailOtpError && (
                <span className="text-danger">{emailOtpError}</span>
              )}
            </div>
          ) : (
            <p>An OTP has been sent to your email.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowEmailOtpModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleEmailOtpVerify}>
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default UserProfile;

// import React, { useState, useEffect } from "react";
// import "./userProfile.css";
// import Layout from "../Components/Layout/Layout";
// import UserMemu from "../User/UserMemu";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { IoPersonOutline } from "react-icons/io5";
// import { CiImageOn } from "react-icons/ci";
// import { MdPhotoCamera } from "react-icons/md";
// import { Modal, Button } from "react-bootstrap";
// import { AiOutlineDelete } from "react-icons/ai";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// function UserProfile() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [userImage, setUserImage] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [dropdownOpen1, setDropdownOpen1] = useState(false);
//   const [imageFile, setImageFile] = useState(null);

//   const [isEmailEditable, setIsEmailEditable] = useState(false);
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);

//   const [showMobileOtpModal, setShowMobileOtpModal] = useState(false);
//   const [mobileOtp, setMobileOtp] = useState("");
//   const [mobileOtpSent, setMobileOtpSent] = useState(false);
//   const [mobileOtpError, setMobileOtpError] = useState("");

//   const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
//   const [emailOtp, setEmailOtp] = useState("");
//   const [emailOtpSent, setEmailOtpSent] = useState(false);
//   const [emailOtpError, setEmailOtpError] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       axios
//         .get("https://tannis.in/api/get-customer-details/", {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         })
//         .then((response) => {
//           if (response.data.status === "success") {
//             const userData = response.data.data;
//             setFirstName(userData.user.first_name);
//             setLastName(userData.user.last_name);
//             setPhone(userData.phone);
//             setEmail(userData.user.email);
//             setDate(userData.dob);
//             setSelectedGender(userData.gender);
//             setUserImage(userData.image);
//           } else {
//             console.error("Failed to retrieve user details.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching user details:", error);
//         });
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (token) {
//       const updatedUserDetails = {
//         gender: selectedGender,
//         dob: date,
//         phone,
//         email,
//         image: userImage,
//         user: {
//           first_name: firstName,
//           last_name: lastName,
//         },
//       };

//       axios
//         .put("https://tannis.in/api/update-user-details/", updatedUserDetails, {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         })
//         .then((response) => {
//           if (response.data.status === "success") {
//             localStorage.setItem(
//               "userData",
//               JSON.stringify(updatedUserDetails)
//             );
//             toast.success("Profile updated successfully");
//           } else {
//             toast.error("Failed to update profile");
//           }
//         })
//         .catch((error) => {
//           console.error("Error updating user details:", error);
//         });
//     }
//   };

//   const handleImageChange = (e) => setImageFile(e.target.files[0]);

//   const handleImageUpload = () => {
//     const token = localStorage.getItem("token");
//     if (token && imageFile) {
//       const formData = new FormData();
//       formData.append("image", imageFile);

//       axios.put(
//         "https://tannis.in/api/update-customer-profile-image/",
//         formData,
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console
//         .log(formData, "************")
//         .then((response) => {
//           if (response.data.status === "success") {
//             setUserImage(URL.createObjectURL(imageFile));
//             setShowModal(false);
//             toast.success("Profile image uploaded successfully");
//           } else {
//             toast.error("Failed to update profile image");
//           }
//         })
//         .catch((error) => {
//           console.error("Error updating profile image:", error);
//         });
//     }
//   };

//   const toggleDropdown1 = () => setDropdownOpen1(!dropdownOpen1);

//   const handlePhoneEdit = () => setIsPhoneEditable(!isPhoneEditable);

//   const handleEmailEdit = () => setIsEmailEditable(!isEmailEditable);

//   const handleMobileSave = () => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         "https://tannis.in/api/otp-phone/",
//         { phone },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.status === "success") {
//           setMobileOtpSent(true);
//           setShowMobileOtpModal(true);
//         } else {
//           toast.error("Failed to send OTP");
//         }
//       })
//       .catch((error) => {
//         toast.error("Error sending OTP");
//       });
//   };

//   const handleMobileOtpVerify = () => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         "https://tannis.in/api/update-phone/",
//         { phone, otp: mobileOtp },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.status === "success") {
//           setShowMobileOtpModal(false);
//           toast.success("Mobile number updated successfully");
//         } else {
//           setMobileOtpError("Invalid OTP, please try again.");
//         }
//       })
//       .catch(() => {
//         setMobileOtpError("Error verifying OTP, please try again.");
//       });
//   };

//   const handleEmailSave = () => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         "https://tannis.in/api/otp-email/",
//         { email },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.status === "success") {
//           setEmailOtpSent(true);
//           setShowEmailOtpModal(true);
//         } else {
//           toast.error("Failed to send OTP");
//         }
//       })
//       .catch(() => {
//         toast.error("Error sending OTP");
//       });
//   };

//   const handleEmailOtpVerify = () => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         "https://tannis.in/api/update-email/",
//         { email, otp: emailOtp },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.status === "success") {
//           setShowEmailOtpModal(false);
//           toast.success("Email updated successfully");
//         } else {
//           setEmailOtpError("Invalid OTP, please try again.");
//         }
//       })
//       .catch(() => {
//         setEmailOtpError("Error verifying OTP, please try again.");
//       });
//   };

//   return (
//     <>
//       <Layout>
//         <div className="container my-3 p-3">
//           <div className="row">
//             <div className="col-md-4">
//               <UserMemu />
//             </div>
//             <div className="col-md-8">
//               <h3 className="userMenuh1 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
//                 My Profile
//               </h3>
//               <div className="profile-container">
//                 <h2 className="mb-3">Personal photo</h2>
//                 {userImage ? (
//                   <img
//                     src={`https://tannis.in${userImage}`}
//                     alt="User"
//                     className="profile-icon mb-3"
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       borderRadius: "50%",
//                     }}
//                   />
//                 ) : (
//                   <IoPersonOutline size={70} className="profile-icon mb-3" />
//                 )}
//                 <span
//                   className="camera-icon"
//                   onClick={() => setShowModal(true)}
//                 >
//                   <MdPhotoCamera className="mt-3 porfCamera" />
//                 </span>
//               </div>

//               <form onSubmit={handleSubmit} className="profile-form">
//                 <div className="gender-container mb-3">
//                   <button
//                     className={`gender-button ${
//                       selectedGender === "male" ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedGender("male")}
//                   >
//                     Male
//                   </button>
//                   <button
//                     className={`gender-button ${
//                       selectedGender === "female" ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedGender("female")}
//                   >
//                     Female
//                   </button>
//                   <button
//                     className={`gender-button ${
//                       selectedGender === "nonBinary" ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedGender("nonBinary")}
//                   >
//                     Non Binary
//                   </button>
//                 </div>

//                 <div className="row">
//                   <div className="col-12 col-md-6 mb-3">
//                     <label className="userPlabel">FirstName</label>
//                     <input
//                       type="text"
//                       className="form-control py-2"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="col-12 col-md-6 mb-3">
//                     <label className="userPlabel">LastName</label>
//                     <input
//                       type="text"
//                       className="form-control py-2"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label className="userPlabel">Birth Date</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     required
//                   />
//                 </div>

//                 {/* Phone Input Section */}
//                 <div className="mb-3">
//                   <label className="userPlabel d-flex justify-content-between w-100 pt-1">
//                     <label className="pb-1">Mobile Number</label>
//                     <label
//                       className="text-primary pb-1"
//                       style={{ cursor: "pointer" }}
//                       onClick={handlePhoneEdit}
//                     >
//                       {!isPhoneEditable ? "Edit" : ""}
//                     </label>
//                   </label>

//                   <div className="d-flex justify-content-between align-items-center">
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       disabled={!isPhoneEditable}
//                       style={{ width: isPhoneEditable ? "80%" : "100%" }} // Adjust width based on edit mode
//                       required
//                     />
//                     {isPhoneEditable && (
//                       <>
//                         <button
//                           className="btn btn-primary ms-2"
//                           onClick={handleMobileSave} // Trigger the OTP sending
//                         >
//                           Save
//                         </button>
//                         <button
//                           className="btn btn-secondary ms-2"
//                           onClick={() => setIsPhoneEditable(false)} // Cancel edit
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 {/* Email Input Section */}
//                 <div className="mb-3">
//                   <label className="userPlabel d-flex justify-content-between w-100 ">
//                     <label className="pb-1">Email</label>
//                     <label
//                       className="text-primary pb-1"
//                       style={{ cursor: "pointer" }}
//                       onClick={handleEmailEdit}
//                     >
//                       {!isEmailEditable ? "Edit" : ""}
//                     </label>
//                   </label>

//                   <div className="d-flex justify-content-between align-items-center">
//                     <input
//                       type="email"
//                       className="form-control py-2"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       disabled={!isEmailEditable}
//                       style={{ width: isEmailEditable ? "80%" : "100%" }} // Adjust width based on edit mode
//                       required
//                     />
//                     {isEmailEditable && (
//                       <>
//                         <button
//                           className="btn btn-primary ms-2"
//                           onClick={handleEmailSave} // Trigger the OTP sending
//                         >
//                           Save
//                         </button>
//                         <button
//                           className="btn btn-secondary ms-2"
//                           onClick={() => setIsEmailEditable(false)} // Cancel edit
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 <div className="dCenter1">
//                   <button className="userPbtn my-3">Save</button>
//                 </div>

//                 <div className="col-12 horiRow "></div>
//                 <div className="my-3">
//                   <div className="dropdown mb-1">
//                     <Link
//                       className={`filDropText text-start d-flex justify-content-between align-items-center   ${
//                         dropdownOpen1 ? "show" : ""
//                       }`}
//                       onClick={toggleDropdown1}
//                     >
//                       Manage Account
//                       {dropdownOpen1 ? (
//                         <FaChevronUp className="ms-2 FaCheColor" />
//                       ) : (
//                         <FaChevronDown className="ms-2 FaCheColor" />
//                       )}
//                     </Link>
//                     <ul
//                       className={`dropdown-menu border-0 ${
//                         dropdownOpen1 ? "show" : ""
//                       }`}
//                     >
//                       <Link to="/" className="deleteAccount">
//                         Delete Account
//                       </Link>
//                     </ul>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton className="text-center my-2">
//             <Modal.Title>
//               <span className="text-center">Change Profile Photo</span>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {/* Hidden File Input */}
//             <input
//               type="file"
//               id="fileInput"
//               className="d-none"
//               onChange={handleImageChange}
//             />

//             {/* Upload Button (Triggers File Input) */}
//             <div className="d-flex justify-content-center align-items-center flex-column gap-3">
//               <button
//                 className="d-flex gap-2 justify-content-center align-items-center userPbtn2 w-75"
//                 onClick={() => document.getElementById("fileInput").click()}
//               >
//                 <CiImageOn size={20} /> Upload Photo
//               </button>
//               <button
//                 className="d-flex gap-2 justify-content-center align-items-center userRemovebtn w-75"
//                 onClick={handleImageUpload} // Handle image upload
//               >
//                 <AiOutlineDelete size={20} />
//                 Remove Image
//               </button>
//             </div>
//           </Modal.Body>
//         </Modal>

//         {/* mobile OTP Modal */}
//         <Modal
//           show={showMobileOtpModal}
//           onHide={() => setShowMobileOtpModal(false)}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Verify OTP</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {mobileOtpSent ? (
//               <div>
//                 <label>Enter OTP</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={mobileOtp}
//                   onChange={(e) => setMobileOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                 />
//                 {mobileOtpError && (
//                   <span className="text-danger">{mobileOtpError}</span>
//                 )}
//               </div>
//             ) : (
//               <p>An OTP has been sent to your email.</p>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setShowMobileOtpModal(false)}
//             >
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleMobileOtpVerify}>
//               Verify OTP
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         {/* Email OTP Modal */}
//         <Modal
//           show={showEmailOtpModal}
//           onHide={() => setShowEmailOtpModal(false)}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Verify OTP</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {emailOtpSent ? (
//               <div>
//                 <label>Enter OTP</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={emailOtp}
//                   onChange={(e) => setEmailOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                 />
//                 {emailOtpError && (
//                   <span className="text-danger">{emailOtpError}</span>
//                 )}
//               </div>
//             ) : (
//               <p>An OTP has been sent to your email.</p>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setShowEmailOtpModal(false)}
//             >
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleEmailOtpVerify}>
//               Verify OTP
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </Layout>
//       ;
//     </>
//   );
// }

// export default UserProfile;
