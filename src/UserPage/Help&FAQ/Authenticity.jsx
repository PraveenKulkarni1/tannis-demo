import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import "../referEarn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Authenticity() {
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
              <span className="spanFaq">Authenticity Of Products</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-lg-12  px-lg-0">
              <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">
                Authenticity Of Products{" "}
              </h3>

              {[
                {
                  id: 1,
                  question:
                    "What measures does Tannis take to ensure the quality of products is up to the mark?",
                  answer: (
                    <span>
                      We want to make genuine beauty products accessible to
                      everyone can guarantee that all Tannis offerings are
                      authentic. Our inventory is sourced directly from the
                      brand or authorised distributors of the brand. We do not
                      accept any grey market products.
                    </span>
                  ),
                },
                {
                  id: 2,
                  question:
                    "What measures does Tannis take to ensure that products are not damaged while shipping?",
                  answer: (
                    <span>
                      We try our best to reduce the risk of damage for every
                      order. We pack our products in boxes which are covered in
                      a plastic layer. Each individual product is packaged in
                      bubble wrap, while fragile items like bottles are safely
                      secured with additional bubble wrap.
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

export default Authenticity;
