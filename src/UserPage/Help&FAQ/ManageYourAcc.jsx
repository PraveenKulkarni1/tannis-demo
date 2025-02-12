import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function ManageYourAcc() {
  const [activeId1, setActiveId1] = useState(null);
  const toggleCollapse1 = (id) => {
    setActiveId1(activeId1 === id ? null : id);
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
              <span className="spanFaq">Manage Your Account</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Manage Your Account{" "}
              </h3>

              {[
                {
                  id: 1,
                  question: "Do I need to register to shop from Tannis?",
                  answer: (
                    <span>
                      Creating an account with Tannis will make it faster for
                      you to place an order with us. We will have your name,
                      address, and basic contact information for quick order
                      placement. However, you can still place an order as a
                      Guest user. It’s a simple 3-step sign-up form: <br />1
                      Click on the Profile icon in the top right corner. <br />{" "}
                      2 You will be redirected to a page to enter your mobile
                      number.
                      <br /> 3 Click on Send OTP option. Enter the OTP, and you
                      are good to go!
                    </span>
                  ),
                },
                {
                  id: 2,
                  question: "How do I add items to my Wishlist?",
                  answer: (
                    <span>
                      If you love an item, you can save it for later. <br />
                      Just click on the ‘Save to Wishlist’ icon on the bottom
                      right corner of the product page. <br />
                      You can access all your favourite products added to the
                      Wishlist anytime by clicking on the ‘Heart’ icon on the
                      top right corner of any page.
                    </span>
                  ),
                },
                {
                  id: 3,
                  question: "How do I edit my account details?",
                  answer: (
                    <span>
                      Here’s how you can edit your account details in 3 simple
                      steps:
                      <br /> Log in to your Tannis account.
                      <br /> Click on Profile icon > Personal Details > Edit
                      <br /> Make your changes and hit the Save button.
                    </span>
                  ),
                },
                {
                  id: 4,
                  question:
                    "How do I update my billing and delivery addresses?",
                  answer: (
                    <span>
                      Here’s how you can update your billing and delivery
                      addresses:
                      <br />
                      1.Log in to your Tannis account.
                      <br />
                      2.Click on Profile icon > Addresses
                      <br />
                      3. Update the existing address or add a new one.
                      <br />
                      4.Hit the Update / Save button.
                    </span>
                  ),
                },
                {
                  id: 5,
                  question: "How do I delete items from my Wishlist?",
                  answer: (
                    <span>
                      Changed your mind about your favourites? Go to the ‘My
                      Wishlist’ menu by clicking on the ‘Heart’ icon in the top
                      right corner. Click on the ‘X’ icon on the top right
                      corner of your wishlist item to remove the product from
                      your Wishlist
                    </span>
                  ),
                },
              ].map((item) => (
                <div key={item.id} className="faqAllBorder py-3 px-3">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    role="button"
                    onClick={() => toggleCollapse1(item.id)}
                  >
                    <h5 className="refQue">{item.question}</h5>
                    <h3>
                      {activeId1 === item.id ? (
                        <>
                          <FaChevronUp size={15} className="ms-2 " />
                        </>
                      ) : (
                        <>
                          <FaChevronDown size={15} className="ms-2 " />
                        </>
                      )}
                    </h3>
                  </div>
                  {activeId1 === item.id && (
                    <p className="refAns mt-2 ">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ManageYourAcc;
