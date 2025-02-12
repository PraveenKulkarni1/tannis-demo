import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../referEarn.css";
import "./faq.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Layout from "./../../Components/Layout/Layout";

function OrderStatus() {
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
              <span className="spanFaq">Order Status</span>
            </h3>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-12 col-lg-12  px-lg-0">
            <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
              Order Status
            </h3>

            {[
              {
                id: 1,
                question:
                  "How do I change the address or phone number I gave for an order?",
                answer:
                  "Unfortunately, we cannot edit the delivery address and contact details once the order is placed. For further assistance, please connect with our team at help@tannisbeauty.com",
              },
              {
                id: 2,
                question: "How do I check the current status of my order?",
                answer: (
                  <span>
                    We understand the jitters you might be feeling in
                    anticipation for your order! Here’s how you can track your
                    order in real time from ’ Profile’ section on the top right
                    corner of the website and top left corner of the App
                    <br />
                    1.Click on Orders
                    <br />
                    2.Select the order you want to track
                    <br />
                    3.Click on track option
                  </span>
                ),
              },
              {
                id: 3,
                question: "Why is my order not showing?",
                answer: (
                  <span>
                    Don’t worry, if your order was successfully placed and you
                    could see a confirmation message, the details should appear
                    under ‘Orders’ in your profile section soon. We’ll also send
                    you an order confirmation message via SMS/Email on your
                    registered email ID and phone number.
                    <br />
                    However, if the order is not visible, there is a possibility
                    that the order wasn’t placed successfully. For prepaid
                    orders, any amount debited shall be reversed within 2-4
                    business days.
                    <br />
                    In the meanwhile, you can place a new order.
                  </span>
                ),
              },
              {
                id: 4,
                question:
                  "I missed the delivery attempt made by the courier partner for my order. How do I get it now?",
                answer: (
                  <span>
                    Don’t sweat it! The courier generally makes multiple
                    attempts to deliver your order. If you were away when the
                    delivery agent arrived, there would be an attempt for
                    delivery again. <br />
                    You can also reach out to the courier directly on the
                    contact details provided in the SMS sent by the courier
                    partner before the delivery attempt.
                  </span>
                ),
              },
              {
                id: 5,
                question: "How do I see my order history?",
                answer: (
                  <span>
                    Here’s how you can view your order history:
                    <br />
                    1.Log in to your Tannis account. <br />
                    2.Click on ‘Profile’ icon at the top right corner of your
                    screen (top left corner for App) <br />
                    3.Click on ‘Orders’ to view your order history
                  </span>
                ),
              },
              {
                id: 6,
                question:
                  "Help, I have received only a part of my Tannis order.",
                answer:
                  "Stay put, we ship your orders from different locations. The shipment closer to your location usually gets delivered first. We’ll drop an email when the rest of your shipment is dispatched or in transit.",
              },
              {
                id: 7,
                question:
                  "My order wasn't confirmed, but the amount was debited from my bank account. How do I proceed?",
                answer: (
                  <span>
                    Do not be concerned; any debited amount will be refunded in
                    its original mode of payment within 1-2 business days. It
                    may take additional 2-4 business days for the credit to
                    reflect into your account depending on the bank and the mode
                    of payment.
                  </span>
                ),
              },
              {
                id: 8,
                question: "How long does it take to process my order?",
                answer:
                  "We aim to process and ship orders within 1-2 business days however in the unlikely event should there be a delay, we would keep you updated on the status.",
              },
              {
                id: 9,
                question: "How soon will I receive my order once shipped?",
                answer:
                  "Delivery of your order may generally take 5-7 business days. Once the product is shipped you will be notified about the same and you can track your order from our website. You will receive an sms/email notification with a tracking number and a link to the delivery partner’s website to track your shipment once your order has been shipped",
              },
              {
                id: 10,
                question:
                  "What happens if my package is lost or damaged during shipping?",
                answer:
                  "In the unlikely event that your shipment is lost or damaged during shipping, please contact us at help@tannisbeauty.com and we will work with the delivery partner to resolve the issue and ensure that you receive your order as soon as possible.",
              },
              {
                id: 11,
                question: "Can I pick up my order in-store?",
                answer:
                  "At this time, we do not offer in-store pickup. All orders are shipped directly to the shipping address provided at checkout.",
              },
              {
                id: 12,
                question: "How will I know when my order has been shipped?",
                answer:
                  "You will receive an sms/email notification with a tracking number and a link to the delivery partner’s website to track your shipment once your order has been shipped.",
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
    </Layout>
  );
}

export default OrderStatus;
