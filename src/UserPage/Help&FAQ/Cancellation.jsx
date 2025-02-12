import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Cancellation() {
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
              <span className="spanFaq">Cancellations And Refunds</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Cancellations And Refunds{" "}
              </h3>

              {[
                {
                  id: 1,
                  question: "What is Tannis's cancellation policy?",
                  answer: (
                    <span>
                      An order can be cancelled anytime until it is shipped, you
                      can do so by following the steps below:
                      <br />
                      1.Go to Profile on the top right corner of the home page
                      (top left corner for App)
                      <br />
                      2. Click on Orders 3. Select order > Select Product >
                      Enter Quantity > Select cancellation reason
                      <br />
                      4. Click on ‘Cancel’
                      <br />
                      5. You will get a pop up for confirmation, select ‘Yes’ if
                      you are sure about cancelling your order
                      <br />
                      Refunds for prepaid orders will be initiated on
                      cancellation. It may take 2-4 business days for the credit
                      to reflect into your account depending on the bank and the
                      mode of payment
                      <br />
                      If the order or the item(s) that you want to cancel is
                      shipped, we request you to call us at 1-800-890-3030 or
                      email at help@tannisbeauty.com to request cancellation. We
                      can instruct the courier partner to not attempt the
                      order’s delivery.
                      <br />
                      Please do not accept if the courier partner still attempts
                      the delivery.
                      <br />
                      Refunds for prepaid orders will be initiated on receipt of
                      the product(s) back to our warehouse. It may take 2-4
                      business days for the credit to reflect into your account
                      depending on the bank and the mode of payment.
                      <br />
                      To know more, please click on the Cancellation Return and
                      Refund Policy.
                    </span>
                  ),
                },
                {
                  id: 2,
                  question:
                    "Are there any cancellation charges on my Tannis order?",
                  answer: (
                    <span>
                      Absolutely not; you can cancel your order anytime and get
                      a full refund for prepaid orders.
                    </span>
                  ),
                },
                {
                  id: 3,
                  question:
                    "How do I cancel my order before it has been shipped?",
                  answer: (
                    <span>
                      We get it; things change. <br />
                      If the order or the item(s) you want to cancel is/are yet
                      to be shipped, you can cancel it from our website or app.{" "}
                      <br />
                      1.Go to Profile on the top right corner of the home page
                      (top left corner for App) <br />
                      2. Click on Orders <br />
                      3. Select order > Select Product > Enter Quantity > Select
                      cancellation reason <br />
                      4. Click on ‘Cancel’ <br />
                      5. You will get a pop up for confirmation, select ‘Yes’ if
                      you are sure about cancelling your order <br />
                      Refunds for prepaid orders will be initiated on
                      cancellation. It may take 2-4 business days for the credit
                      to reflect into your account depending on the bank and the
                      mode of payment
                    </span>
                  ),
                },
                {
                  id: 4,
                  question:
                    "How do I cancel my order after it has been shipped?",
                  answer: (
                    <span>
                      If the order or the item(s) that you want to cancel is
                      shipped, we request you to call us at 1-800-890-3030 or
                      email at help@tannisbeauty.com to request cancellation. We
                      can instruct the courier partner to not attempt the
                      order’s delivery. <br />
                      Please do not accept if the courier partner still attempts
                      the delivery. <br />
                      Refunds for prepaid orders will be initiated on receipt of
                      the product(s) back to our warehouse. It may take 2-4
                      business days for the credit to reflect into your account
                      depending on the bank and the mode of payment. <br />
                      To know more, please click on the Cancellation Return and
                      Refund Policy.
                    </span>
                  ),
                },
                {
                  id: 5,
                  question:
                    "Will shipping charges be refunded if I cancel my Tira order?",
                  answer: (
                    <span>
                      Shipping charges will be refunded if the complete order is
                      cancelled. However, if only part of the order is
                      cancelled, the shipping charge shall be refunded according
                      to the calculated share.
                    </span>
                  ),
                },
                ,
                {
                  id: 6,
                  question:
                    "What if I used coupon codes/gift card/rewards points for payments and had to cancel the order?",
                  answer: (
                    <span>
                      Discount vouchers fetch good deals, but they’re intended
                      for one-time use only and shall be treated as used even if
                      you cancel the order.
                      <br />
                      However, if you redeem reward points for an order and then
                      later cancel it, the same will be credited back to your
                      account.
                    </span>
                  ),
                },
                ,
                {
                  id: 7,
                  question:
                    "When will I receive the refund for a cancelled order?",
                  answer: (
                    <span>
                      Please do not accept if the courier partner still attempts
                      the delivery. <br />
                      Refunds for prepaid orders will be processed in the
                      original mode of payment upon receipt of the items back to
                      our warehouse. <br />
                      Once processed, it should take 2-4 business days for the
                      refunded amount to reflect in your account. <br />
                      To know more, please click on the Cancellation Return and
                      Refund Policy.
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

export default Cancellation;
