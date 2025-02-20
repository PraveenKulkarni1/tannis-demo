import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function OffersPromotions() {
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
              <span className="spanFaq">Offers And Promotions</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Offers And Promotions{" "}
              </h3>

              {[
                {
                  id: 1,
                  question: "What is the Tannis Treats program?",
                  answer: (
                    <span>
                      Tannis Treats is our exclusive loyalty program that offers
                      special benefits tailored to enhance your beauty shopping
                      experience. With Tannis Treats, you can progress through
                      our 3 tiered loyalty system, earn reward points with each
                      purchase or by taking part in activities on the Tannis
                      platform, and redeem the reward points to get exclusive
                      rewards from our rewards catalogue. For more information
                      please refer to the Tannis Treats{" "}
                      <span>
                        <Link>Terms and Conditions</Link>
                      </span>
                    </span>
                  ),
                },
                {
                  id: 2,
                  question:
                    "Is Tannis Treats the same as Tannis Loyalty Program? / Is there a difference between Tannis Treats and Tannis Loyalty Program?",
                  answer: (
                    <span>
                      Tannis Treats is the new and updated version of the
                      existing Tannis Loyalty Program. Tannis Treats will
                      replace the existing Tannis Loyalty Program from 21st
                      Feb’24
                    </span>
                  ),
                },
                {
                  id: 3,
                  question:
                    "How do I become a member of the Tannis Treats program?",
                  answer: (
                    <span>
                      You will be automatically enrolled into the Tannis Treats
                      program if you are a registered Tannis user. You can
                      become a registered user of Tannis by signing up on the
                      Tannis website or mobile application, and there is no
                      minimum spend requirement to join.
                    </span>
                  ),
                },
                ,
                {
                  id: 4,
                  question:
                    "How many tiers are there in the Tannis Treats program?",
                  answer: (
                    <span>
                      The Tannis Treats program consists of three tiers: Tannis
                      Fan, Tannis Muse, and Tannis All Star.
                      <br />
                      All users begin their Tannis treats Journey as a Tannis
                      Fan, and can progress to the next tiers basis the tier
                      eligibility criteria
                    </span>
                  ),
                },
                ,
                {
                  id: 5,
                  question:
                    "What are the benefits under each tier of Tannis Treats program?",
                  answer: (
                    <span>
                      Our benefits are tailored individually for each tier.
                      Please refer to ‘Table A’ under ‘Tannis Treats Overview’
                      in the Tannis Treats Terms and Conditions for an overview
                      of the benefits specific to each tier. For more
                      information please refer to the Tannis Treats{" "}
                      <span>
                        <Link>Terms and Conditions</Link>
                      </span>
                    </span>
                  ),
                },
                ,
                {
                  id: 6,
                  question:
                    "How do I progress through the different tiers under Tannis Treats?",
                  answer: (
                    <span>
                      Your membership tier will be determined based on your
                      spend on the Tannis platform. You must meet the minimum
                      qualification threshold for each tier, as set out below,
                      to progress across the tiers or to retain your membership
                      in a specific tier:
                      <br />
                      1.Tannis Fan: Eligible when annual spend is less than or
                      equal to INR 5000 <br />
                      2.Tannis Muse: Eligible when annual spend is less than or
                      equal to ₹15,000 <br />
                      3.Tannis All Star: Eligible when annual spend exceeds
                      ₹15,000
                    </span>
                  ),
                },
                ,
                {
                  id: 7,
                  question:
                    "What is the validity of the different tiers in Tannis Treats?",
                  answer: (
                    <span>
                      All tiers under the Tannis Treats program will have a
                      validity of 365 days from the date of commencement of the
                      relevant tier status. Tier status will be reviewed at the
                      end of the validity period and users will be classified
                      into the relevant tier basis spend eligibility (as
                      detailed under point 8 below).
                    </span>
                  ),
                },
                ,
                {
                  id: 8,
                  question: "What is the Tier Renewal Eligibility?",
                  answer: (
                    <span>
                      At the end of your current tier validity, your tier status
                      will be reviewed basis your spend on the Tannis platform
                      during the previous tier cycle. Your new tier status will
                      be classified as below:
                      <br />
                      1.Tannis Fan: If spend less than or equal to ₹5,000 <br />
                      2.Tannis Muse: If spend less than or equal to ₹15,000{" "}
                      <br />
                      3.Tannis All Star: If spend greater than ₹15,000
                    </span>
                  ),
                },
                ,
                {
                  id: 9,
                  question: "How can I earn Tannis points?",
                  answer: (
                    <span>
                      You can earn points in one of the following ways:
                      <br />
                      Transaction Mode: <br />
                      You will earn points with each purchase on the Tannis
                      platform. You will receive 10 points for every ₹100 spent
                      on Tannis – (pro-rated & rounded to the nearest whole
                      number) i.e 10% of your order value back as reward points.
                      Tannis points earned in this manner will be credited to
                      your account once the return window for your order has
                      expired and will have a validity of 365 days. <br />
                      Non-transaction Mode: <br />
                      You can also earn points if you undertake and complete
                      certain tasks/activities advertised on the Tannis platform
                      and accrue the corresponding points for completion of the
                      relevant task/activity as reflected on the Tannis
                      platform. Points earned in this manner will have a
                      validity of 30 days. <br />
                      Referral Mode: <br />
                      You can also refer your friends to shop on Tannis and earn
                      points for yourself and your friend. Here is how it works:{" "}
                      <br />
                      1.Share the referral link with your friends from the
                      referral page on the Tannis platform; 2.Your friend signs
                      up on the Tannis platform and inputs your referral code
                      when signing up; 3.Your friend needs to make their first
                      purchase within 14 days of signing up; <br />
                      4.Their first purchase made by the friend must be of a
                      minimum cart value of ₹1299 (after all applicable offers
                      and discounts); <br />
                      5.You and your friend will both receive 200 Tannis points
                      post the expiry of the return window for their order.{" "}
                      <br />
                      You can earn referral points from a maximum of 5
                      successful referrals only. Tannis points will be credited
                      once the stipulated conditions (set out above) are met and
                      will have a validity of 15 days.
                    </span>
                  ),
                },
                ,
                {
                  id: 10,
                  question: "Where can I view my Tannis points?",
                  answer: (
                    <span>
                      In the profile section, you’ll find a dedicated area
                      specifically for “Tannis Treats.” This section provides a
                      comprehensive overview of your activities and
                      corresponding Tannis points earned. It will also offer a
                      detailed history of your activities vis a vis the Tannis
                      points.
                    </span>
                  ),
                },
                ,
                {
                  id: 11,
                  question: "Do Tannis points expire?",
                  answer: (
                    <span>
                      Yes, Tannis points earned will be valid for a specific
                      period and such validity may be different depending on the
                      mode in which the relevant Tannis points are earned by the
                      user. For more information on the validity of Tannis
                      points please refer to ‘Table C’ under ‘Earning Tannis
                      Points’ in the Tannis Treats Terms and Conditions
                    </span>
                  ),
                },
                ,
                {
                  id: 12,
                  question: "How can I redeem my Tannis points?",
                  answer: (
                    <span>
                      You can redeem your earned points for exciting products
                      from the rewards catalogue. To do so, you’ll need to have
                      points equivalent to or greater than the points listed for
                      the respective catalogue items. Once you’ve chosen the
                      item you wish to redeem with your points, simply add it to
                      your cart and proceed to checkout. Please note that you
                      can only complete the checkout if the total value of your
                      cart exceeds ₹299. Checking out with items solely from the
                      rewards catalogue is not permitted.
                    </span>
                  ),
                },
                ,
                {
                  id: 13,
                  question:
                    "Can I redeem my points if I don't have sufficient points in the rewards catalogue?",
                  answer: (
                    <span>
                      You can only redeem your points if you have earned enough
                      points that match the value of an item in the rewards
                      catalogue. For instance, to redeem a product worth 100
                      points from the rewards catalogue, you must have
                      accumulated a total of 100 Tannis points in your account.
                      Please note that combining points and cash for redemption
                      is not possible.
                    </span>
                  ),
                },
                ,
                {
                  id: 14,
                  question: "Can I use my Tannis points as cash?",
                  answer: (
                    <span>
                      Unfortunately, no. You can only redeem your Tannis points
                      for items available in the rewards catalogue.
                    </span>
                  ),
                },
                ,
                {
                  id: 15,
                  question:
                    "Do my accumulated points get deducted if I cancel my order on Tannis platform?",
                  answer: (
                    <span>
                      Tannis points are only credited after the return window
                      for a product purchased by you has expired. If your order
                      is partially or fully cancelled, or if you return products
                      from your order, your points will be credited
                      proportionately for the value of the products you retain.
                      In case of full order cancellation or full order return,
                      no points will be credited.
                    </span>
                  ),
                },
                ,
                {
                  id: 16,
                  question:
                    "What is the cancellation policy for redeemed products from the rewards catalogue?",
                  answer: (
                    <span>
                      If you’ve used Tannis points to redeem products from the
                      rewards catalogue and you wish to cancel the order, please
                      initiate a return request from your account. If your
                      return request meets our eligibility criteria (as per our
                      <span>
                        <Link>Cancellation and Refund Policy</Link>
                      </span>
                      ), the Tannis points will be credited back to your account
                      once the return process is completed (i.e. once the
                      returned product is received at its origin). Also note
                      that points redeemed for discounts are non-refundable.
                    </span>
                  ),
                },
                ,
                {
                  id: 17,
                  question: "Is there a minimum order value to earn points?",
                  answer: (
                    <span>
                      There’s no minimum order value required to earn Tannis
                      points. These points are calculated based on the total
                      cart value for your order. Points will be rounded to the
                      nearest value.
                    </span>
                  ),
                },
                ,
                {
                  id: 18,
                  question:
                    "I have made a purchase. When will Tannis points reflect in my account?",
                  answer: (
                    <span>
                      Your Tannis points will be reflected after the return
                      window has expired.
                    </span>
                  ),
                },
                ,
                {
                  id: 19,
                  question: "What is the current return window for Tannis?",
                  answer: (
                    <span>
                      The current return window is 15 days post-delivery of the
                      products to you.
                    </span>
                  ),
                },
                ,
                {
                  id: 20,
                  question: "Can I transfer my Tannis points to someone else?",
                  answer: (
                    <span>
                      Please note that your account is directly linked to the
                      Tannis points you earn, and it is not possible to transfer
                      these points to another person/user.
                    </span>
                  ),
                },
                ,
                {
                  id: 21,
                  question:
                    "What will happen to the old rewards points that were accumulated before the launch of Tannis Treats?",
                  answer: (
                    <span>
                      Points earned in the Tannis Rewards program will
                      automatically transfer to the Tannis Treats program
                      without any deductions. These transferred points will have
                      a validity of 90 days from the date of transfer.
                    </span>
                  ),
                },
                ,
                {
                  id: 22,
                  question:
                    "Who should I reach out to for any queries on Tannis Treats?",
                  answer: (
                    <span>
                      For any queries and assistance please contact us on <br />
                      Call: 1-800-890-3030
                      <br />
                      WhatsApp: 7977090909
                      <br />
                      (All days, between 8am-8pm)
                      <br />
                      Email: help@tannisbeauty.com
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

export default OffersPromotions;
