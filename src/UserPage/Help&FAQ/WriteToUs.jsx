import React, { useRef, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "../referEarn.css";
import { CiImageOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import "../referEarn.css";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function WriteToUs() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <h3 className="mainHead">
              <Link to="/" className="mainHead">
                Home <IoIosArrowForward size={15} className="mainHead" />
                <span>
                  <Link to="/faq" className="mainHead">
                    FAQ <IoIosArrowForward size={15} className="mainHead" />
                  </Link>
                </span>
              </Link>{" "}
              <span className="spanFaq">New Ticket</span>
            </h3>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                How can we help?
              </h3>
              <h5 className="refQue">
                Need assistance with your order or interested in joining Team
                Tannis? Submit a ticket here. Have you looked at our{" "}
                <span className="proErr">FAQ</span>s? We are constantly updating
                it, so your answer might be there already.
              </h5>
              <div className="row">
                <div className="col-lg-8 col-md-6 col-xl-8">
                  <form onSubmit={handleSubmit} className="">
                    <div className="row ">
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label formLabel">
                          Mobile Number
                        </label>{" "}
                        <span className="proErr">*</span>
                        <input
                          type="text"
                          className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                          placeholder=""
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label formLabel">Email</label>{" "}
                        <span className="proErr">*</span>
                        <input
                          type="text"
                          className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                          placeholder=""
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label formLabel">
                        Subject <span className="proErr">*</span>
                      </label>
                      <textarea
                        type="text"
                        rows="2"
                        className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                        placeholder=""
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label formLabel">
                        Share details here <span className="proErr">*</span>
                      </label>
                      <textarea
                        type="text"
                        rows="4"
                        className="form-control p-0 p-sm-1 p-md-1 p-lg-1"
                        placeholder=""
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column gap-3 mb-3">
                      <button
                        className="d-flex gap-2 justify-content-center align-items-center writePbtn2 "
                        onClick={handleClick}
                      >
                        <CiCamera size={20} /> Choose file
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }} // Hide the input field
                      />
                    </div>
                    <h3 className="writeUpload text-center mb-3">
                      <IoAlertCircleOutline size={18} /> Upload clear images of
                      Product & Packaging Box in PNG, JPG, JPEG, DOCX, PDF
                      format only
                    </h3>
                    <div className=" mb-3">
                      <button className="loginBtn ">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-3">
              <h3 className="refQue">
                Should you need any further assistance please reach out to us on
                1-800-890-3030 or Whatsapp 7977090909 or simply email us at
                help@tannisbeauty.com
              </h3>
            </div>
            <div className="col-12 horiRow my-3"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WriteToUs;
