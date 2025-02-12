import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Payments() {
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
              <span className="spanFaq">Payments</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Payments
              </h3>

              {[
                {
                  id: 1,
                  question: "How do I pay for my Tannis purchase?",
                  answer: (
                    <span>
                      There are multiple ways to pay securely on Tannis. These
                      include:
                      <br />
                      1.Cash on Delivery
                      <br />
                      2.Pay by card
                      <br />
                      3.Paytm
                      <br />
                      4.UPI
                      <br />
                      You can always view the available options on the payment
                      page while placing an order.
                    </span>
                  ),
                },
                {
                  id: 2,
                  question: "How do I use a coupon code on my order?",
                  answer: (
                    <span>
                      1. Once you add all the products to the shopping bag that
                      you wish to buy, click on the bag icon <br />
                      2.Mention the coupon code in the coupon field under
                      ‘Payment Details’ section <br />
                      Once the coupon is applied, the discount will reflect
                      under ‘Apply Coupon’ section. You will find the eligible
                      coupons by clicking on the “View all” option of this
                      section <br />
                      3.You can then proceed to checkout and pay the remaining
                      amount using any other available mode of payment.
                      <br />
                      Note: Only one coupon code can be used on a single order.
                      If you choose to cancel an order after applying a coupon
                      code, it will not be usable for a later purchase depending
                      on the conditions of coupon. Tannis reserves the right to
                      cancel orders in case of suspected misuse of coupons.
                    </span>
                  ),
                },
                {
                  id: 3,
                  question:
                    "What is the Cash on Delivery (COD) payment method?",
                  answer: (
                    <span>
                      Cash on Delivery (COD) is a payment method where customers
                      place their order and pay later in cash at the time of
                      delivery.
                    </span>
                  ),
                },
                ,
                {
                  id: 4,
                  question: "How can I place a COD order?",
                  answer: (
                    <span>
                      To place a COD order, select the “Cash on Delivery” option
                      during checkout. Ensure that you provide accurate contact
                      and address details for smooth delivery.
                    </span>
                  ),
                },
                ,
                {
                  id: 5,
                  question:
                    "What happens if I'm not available to receive my COD order?",
                  answer: (
                    <span>
                      If you’re unavailable during the delivery attempt, the
                      courier may make subsequent attempts or leave a
                      notification for you to reschedule the delivery.
                    </span>
                  ),
                },
                ,
                {
                  id: 6,
                  question: "Can I use any currency for a COD payment?",
                  answer: (
                    <span>
                      COD payments are usually made in Indian Rupees. Ensure you
                      have the required cash amount in INR at the time of
                      delivery
                    </span>
                  ),
                },
                ,
                {
                  id: 7,
                  question: "Are there any limitations on COD orders?",
                  answer: (
                    <span>
                      The COD payment option allows users to make a cash-only
                      payment to our delivery executive or logistic partner when
                      the purchased products are delivered. Presently, we offer
                      a maximum order value of INR 5000 (Indian Rupees Five
                      Thousand) under the cash on delivery payment option. Users
                      should check cash on the delivery limit by entering the
                      relevant area pin code before placing any order on Tannis.
                      For more information, please visit our{" "}
                      <span>
                        <Link to="/">Fees and Payments Policy.</Link>
                      </span>
                    </span>
                  ),
                },
                ,
                {
                  id: 8,
                  question: "How do returns for COD order work?",
                  answer: (
                    <span>
                      If the mode of payment for the order was ‘cash on
                      delivery’ the user will be requested to share their bank
                      details by filling out the pop-up form that appears on the
                      website/app while raising the return request. Upon
                      receiving the user’s bank account details the refund will
                      be credited to the user bank account. If the mode of
                      payment for the order was through a payment option other
                      than the ‘cash-on-delivery’ option, we may transfer the
                      refund to the user source account that was used to make
                      the initial payment.
                    </span>
                  ),
                },
              ].map((item) => (
                <div key={item.id} className="faqAllBorder py-3 px-3">
                  <div
                    className="d-flex justify-content-between align-items-center "
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

export default Payments;
