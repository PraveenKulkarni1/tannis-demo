import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function ReturnRefund() {
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
              <span className="spanFaq">Retrurn And Refund</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Retrurn And Refund{" "}
              </h3>

              {[
                {
                  id: 1,
                  question: "What is Tannis's Return Policy?",
                  answer: (
                    <span>
                      Tannis offers its customers an easy Return Policy, wherein
                      you can raise a return request for a product within 15
                      days of its delivery. We also accept partial returns
                      wherein you can submit a request for one or all products
                      in your order.
                      <br />
                      Please note returns will not be accepted under the
                      following conditions
                      <br />
                      a) Product is damaged due to misuse/overuse;
                      <br />
                      b) Product is received in physically damaged condition
                      <br />
                      c) Product is used or altered by the user;
                      <br />
                      d) Returned without original packaging including, price
                      tags, labels, original packing, freebies and other
                      accessories or if original packaging is damaged;
                      <br />
                      e) Serial Number and/ or the bar code is tampered by the
                      user;
                      <br />
                      f) Product is defective and not covered under
                      Seller/Manufacturer’s warranty;
                      <br />
                      g) Request is initiated beyond 15 days of order delivery;
                      <br />
                      h) Product ordered was customized on demand…
                      <br />
                      For a more detailed return policy, please click here.
                      <br />
                      Please note: Special return/exchange/refund rules may
                      apply for certain marketing campaigns or mega sale
                      periods. Information regarding this is visible on the
                      promotion banner. For any clarification, please feel free
                      to contact our Customer Care.
                    </span>
                  ),
                },
                {
                  id: 2,
                  question:
                    "How do I place a return request for an item purchased on Tannis?",
                  answer: (
                    <span>
                      We hope you get to keep the next one! For now, a return
                      request after an order has been delivered can be placed by
                      following the steps below:
                      <br />
                      1. Go to your Profile option on the top right corner (top
                      left corner for App)
                      <br />
                      2.Click on ‘Orders’. Go to the order you wish to return
                      and select ‘Return’. Proceed with the reason for Return.
                      <br />
                      3. Enter the return quantity
                      <br />
                      Add a beneficiary account to receive the refund (only for
                      Cash On Delivery orders)
                      <br />
                      4. Upload clear images of the product, entire package and
                      batch number which you should be able to find close to
                      MRP/Expiry date of the item
                      <br />
                      5.Click on Return
                      <br />
                      6.You will get a pop up for confirmation, select ‘Yes’ if
                      you are sure about returning your order
                      <br />
                      Once your request is received, it may take up to 24 hours
                      for approval, once approved the product will be picked up
                      in 2-3 business days.
                      <br />
                      Refunds will be initiated on pick-up only if the
                      product(s) are received by us in their original packaging
                      with their seals, labels and bar codes intact. It may take
                      2-4 business days for the credit to reflect into your
                      account depending on the bank and the mode of payment.
                    </span>
                  ),
                },
                {
                  id: 3,
                  question:
                    "I have received a damaged/defective/wrong product in my order; how do I proceed?",
                  answer: (
                    <span>
                      We’re sorry to hear you’ve received an incorrect or
                      damaged product. We make sure our shipments undergo
                      thorough quality check processes before they leave our
                      warehouse, but they can get damaged in transit. <br />
                      To proceed, you can place a return request. Simply follow
                      the steps below to initiate your return/refund within 15
                      days of receiving the order. <br />
                      1.Go to your Profile option on the top right corner (top
                      left corner for App) <br />
                      2.Click on ‘Orders’. Go to the order you wish to return
                      and select ‘Return’. Proceed with the reason for Return.{" "}
                      <br />
                      3.Enter the return quantity <br />
                      4.Add a beneficiary account to receive the refund (only
                      for Cash On Delivery orders) <br />
                      5.Upload clear images of the damaged/defective/wrong
                      product, entire package and batch number which you should
                      be able to find close to MRP/Expiry date of the item{" "}
                      <br />
                      6.Click on Return <br />
                      7.You will get a pop up for confirmation, select ‘Yes’ if
                      you are sure about returning your order <br />
                      Once your request is received, it may take up to 24 hours
                      for approval, once approved the product will be picked up
                      in 2-3 business days. <br />
                      Refunds will be initiated on pick-up only if the
                      product(s) are received by us in their original packaging
                      with their seals, labels and bar codes intact. It may take
                      2-4 business days for the credit to reflect into your
                      account depending on the bank and the mode of payment.
                    </span>
                  ),
                },
                ,
                {
                  id: 4,
                  question: "How do I track my return status?",
                  answer: (
                    <span>
                      You can track the Return status under ‘Orders’ section on
                      Tannis app/website. We will notify you of your refund
                      status via email/SMS.
                    </span>
                  ),
                },
                ,
                {
                  id: 5,
                  question: "How do I return a part of my order?",
                  answer: (
                    <span>
                      A partial return can be created at an item level. If you
                      have ordered multiple items, you can initiate a return for
                      any individual item. However, any product being returned
                      needs to be done in full, including all components and any
                      complimentary gifts or products that came along with it.
                    </span>
                  ),
                },
                ,
                {
                  id: 6,
                  question:
                    "How will I get my refund for returned items, and how long will this process take?",
                  answer: (
                    <span>
                      For returns, refunds are initiated on pick-up only if the
                      product(s) are received by us in their original packaging
                      with their seals, labels and bar codes intact
                      <br />
                      1.For payments done through credit/debit cards or net
                      banking, refunds will be initiated on pick-up only if the
                      products are received by us in their original packaging
                      with their seals, labels and bar codes intact. It may take
                      2-4 business days for the credit to reflect into your
                      account depending on the bank and the mode of payment.
                      <br />
                      2.For cash on delivery transactions, we will initiate a
                      bank transfer of the refund amount against the billing
                      details shared by you. Refunds will be initiated on
                      pick-up only if the products are received by us in their
                      original packaging with their seals, labels and bar codes
                      intact. It may take 2-4 business days for the credit to
                      reflect into your account depending on the bank.
                    </span>
                  ),
                },
                ,
                {
                  id: 7,
                  question:
                    "What happens to delivery charges when I return a product?",
                  answer: (
                    <span>
                      Unfortunately, delivery charges are non-refundable.
                    </span>
                  ),
                },
                ,
                {
                  id: 8,
                  question: "Why has my return request been rejected?",
                  answer: (
                    <span>
                      That’s a bummer! While we wish your shopping experience to
                      be seamless and fun, we appreciate your understanding that
                      returns will only be accepted if the return period is not
                      over or certain conditions are met. Please read about the
                      detailed Return Policy here.
                    </span>
                  ),
                },
                ,
                {
                  id: 9,
                  question: "Which categories are not eligible for returns?",
                  answer: (
                    <span>
                      You can find details of which categories are ineligible
                      for returns on our Return Policy page.
                    </span>
                  ),
                },
                ,
                {
                  id: 10,
                  question:
                    "Do I have to return the free gift when I return a product?",
                  answer: (
                    <span>
                      We accept the return of orders in full that is along with
                      all free gifts.
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

export default ReturnRefund;
