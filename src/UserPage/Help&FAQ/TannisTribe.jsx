import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function TannisTribe() {
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
              <span className="spanFaq">Tannis Tribet</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Tannis Tribe
              </h3>

              {[
                {
                  id: 1,
                  question: "How long will I be a part of the Tannis Tribe?",
                  answer: (
                    <span>
                      You can be part of the Tannis Tribe for an initial
                      one-year period, with the option to renew. We want to
                      build long-term partnerships with creators we love.
                    </span>
                  ),
                },
                {
                  id: 2,
                  question: "Is the number of my followers important?",
                  answer: (
                    <span>
                      No, it’s not. We’re looking for authentic storytellers and
                      beauty obsessives, regardless of their follower count.
                      Please note that a public profile is a requirement.
                    </span>
                  ),
                },
                {
                  id: 3,
                  question: "What kind of creators is Tannis Tribe seeking?",
                  answer: (
                    <span>
                      Tannis Tribe is on the lookout for passionate creators
                      with engaged follower communities. We welcome people of
                      diverse backgrounds, including races, ethnicities,
                      religions, gender identities, body types, sexual
                      orientations, and abilities.
                    </span>
                  ),
                },
                {
                  id: 4,
                  question: "Can Tannis/Reliance employees apply?",
                  answer: (
                    <span>
                      Absolutely! Tannis/Reliance team members are encouraged to
                      apply if they have been with Tannis/Reliance for a minimum
                      of three months and maintain an active Instagram account
                      with an engaged follower base.
                    </span>
                  ),
                },
                {
                  id: 5,
                  question: "What is the minimum age requirement?",
                  answer: <span>Applicants must be 18 years or older.</span>,
                },
                {
                  id: 6,
                  question: "Can influencers from around the world apply?",
                  answer: <span>Applicants must be residents of India.</span>,
                },
                {
                  id: 7,
                  question:
                    "When will I be informed about my acceptance into Tannis Tribe?",
                  answer: (
                    <span>
                      All-important timelines are specified within the ‘key
                      dates’ section.
                    </span>
                  ),
                },
                {
                  id: 8,
                  question:
                    "Can I collaborate with other beauty platforms if I'm part of Tannis Tribe?",
                  answer: (
                    <span>
                      No, exclusive collaboration with other beauty platforms is
                      not permitted.
                    </span>
                  ),
                },
                {
                  id: 9,
                  question: "Can Tannis/Reliance employees apply?",
                  answer: (
                    <span>
                      Absolutely! Tannis/Reliance team members are encouraged to
                      apply if they have been with Tannis/Reliance for a minimum
                      of three months and maintain an active Instagram account
                      with an engaged follower base.
                    </span>
                  ),
                },
                {
                  id: 10,
                  question: "What is the minimum age requirement?",
                  answer: <span>Applicants must be 18 years or older.</span>,
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

export default TannisTribe;
