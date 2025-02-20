import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./referEarn.css";
import Layout from "../Components/Layout/Layout";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Rev from "./Rev";

function ReferEarn() {
  const [activeId1, setActiveId1] = useState(null);
  const toggleCollapse1 = (id) => {
    setActiveId1(activeId1 === id ? null : id);
  };
  return (
    <Layout>
      <Rev />
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-12 col-lg-12  px-lg-0">
            <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3 ">
              FAQ
            </h3>

            {[
              {
                id: 1,
                question: "Who is eligible for the Tannis referral program?",
                answer:
                  "All users who have signed up to Tannis are eligible to participate in the Tannis referral program pursuant to the applicable terms and conditions.",
              },
              {
                id: 2,
                question: "What is the benefit of referring a friend?",
                answer:
                  "When you refer a friend to shop on Tannis, both you, and your friend are rewarded. When your friend signs up using your referral code, and makes their first purchase (within a period of 15 days of signing up), for a minimum order value of ₹1299, you will both be eligible to receive 200 Tannis Points post the completion of the return window of the product(s) ordered by your friend.",
              },
              {
                id: 3,
                question: "How do I refer a friend?",
                answer:
                  "You can refer a friend by sharing your referral link. You can also share your referral code with your friend. You will receive Tannis Points only if your friend signs up using your link or code & meets the criteria as set out in point 2 above. Here is the step-by-step guide: Share the referral link with your friends from the referral page. Your friend signs up on Tannis and inputs your referral code when signing up. Your friend needs to make their first purchase within 15 days of signing up. Their first purchase must be for a minimum order value of ₹1299.",
              },
              {
                id: 4,
                question: "When do I receive rewards?",
                answer:
                  "Your referral reward will be credited into your Tannis Treats account when your friend successfully makes their first purchase (as per the conditions set out in point 2 above). You and your friend will each receive 200 Tannis Points post the completion of the return window for the relevant order (subject to applicable terms and conditions & final bill value being of a minimum of ₹1299).",
              },
              {
                id: 5,
                question: "Where can I get a referral code / link?",
                answer:
                  "You can generate your referral code / link from the referral section of the Tannis website or app Tannis Referrals",
              },
              {
                id: 6,
                question: "Where can I track the status of my referrals?",
                answer:
                  "While we don’t provide live status of your referral for privacy reasons, you can check your referral rewards under the ‘Rewards History’ section of Tannis Treats.",
              },
              {
                id: 7,
                question:
                  "Is there a limit to the number of times I can refer a friend and claim rewards?",
                answer:
                  "You can refer your friends, any number of times, as you may desire. However, your rewards will be limited to the first 5 instances of successful referrals in accordance with the applicable Tannis Treats terms and conditions.",
              },
              {
                id: 8,
                question: "Do the referral points expire?",
                answer:
                  "Referral points are treated as non-transactional earnings, and have the same validity period as Tannis points earned under the non-transaction mode , i.e. 14 days.",
              },
              {
                id: 9,
                question:
                  "Where can I learn more about Tannis Treats & how points work?",
                answer:
                  "You can explore Treats Page here. You can also refer to the FAQ document on Tannis Treats here",
              },
              {
                id: 10,
                question:
                  "Who can I reach out to for support or help with the referral program?",
                answer:
                  "Terms and conditions governing referrals are part of the Tannis Treats Treats Terms and conditions available at reward policy",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="border-bottom border-secondary py-3 px-3"
              >
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

export default ReferEarn;
