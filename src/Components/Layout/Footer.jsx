import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.jpeg";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center footerNav1 mb-3">
              Be the first to hear about all things Tannis
            </h1>
            <p className="text-center footerNav2 mb-3">
              Stay connected for exclusive offers and latest updates, delivered
              straight to your inbox
            </p>
          </div>
          <div className="footerIpmain my-3">
            <div className="input-group d-flex gap-3 footerInput col-lg-6 mb-3">
              <input
                type="text"
                className="form-control footerbg"
                placeholder="Enter Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="loginBtn" type="button" id="button-addon2">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 ">
            <img src={logo1} className="footerLogo" />
            <p className="footerp my-3">
              For every day, for every mood, for every you
            </p>
          </div>
          <div className="col-md-2 ">
            <ul className="footer1ul p-0 d-flex gap-2 flex-column">
              <li>
                <Link to="/">Tira</Link>
              </li>

              <li>
                <Link to="/">Who We Are</Link>
              </li>
              <li>
                <Link to="/">For You</Link>
              </li>
              <li>
                <Link to="/">Tira Red</Link>
              </li>
              <li>
                <Link to="/">Offers</Link>
              </li>
              <li>
                <Link to="/">Tira Tribe</Link>
              </li>
              <li>
                <Link to="/">Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="footer1ul p-0 d-flex gap-2 flex-column">
              <li>
                <Link to="/">Customer Care</Link>
              </li>

              <li>
                <Link to="/">Help Centre</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="footer1ul p-0 d-flex gap-2 flex-column">
              <li>
                <Link to="/">Categories</Link>
              </li>
              <li>
                <Link to="/">Makeup</Link>
              </li>
              <li>
                <Link to="/">Skin</Link>
              </li>
              <li>
                <Link to="/">Hair</Link>
              </li>
              <li>
                <Link to="/">Fragrance</Link>
              </li>
              <li>
                <Link to="/">Bath & Body</Link>
              </li>
              <li>
                <Link to="/">Tools & Appliances</Link>
              </li>{" "}
              <li>
                <Link to="/"></Link>
              </li>{" "}
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer1ull p-0 d-flex gap-2 flex-column">
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">
                  Call: <span className="linkColor">1-800-890-3030</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Whatsapp: <span className="linkColor">79770 90909</span>
                  <br />
                  (All days, between 8am-8pm)
                </Link>
              </li>
              <li>
                <Link to="/">
                  Email: <span className="linkColor">help@tirabeauty.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-12 horiRow"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <p>© 2024 Tira. All Rights Reserved.</p>
            <ul className="TfooterEnd p-0">
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Fees & Payments</Link>
              </li>
              <li>
                <Link to="/">Cancellation & Refund Policy</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Shipping & Delivery Policy</Link>
              </li>
              <li>
                <Link to="/">Rewards Policy</Link>
              </li>
              <li>
                <Link to="/">Promotions Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footerIcon ">
            <ul className=" d-flex justify-content-between align-items-center p-0 gap-3">
              <li>
                <Link to="https://www.facebook.com/login/">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/https://www.instagram.com/accounts/login">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://x.com/i/flow/login">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://www.youtube.com/account">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
