import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../referEarn.css";
import "./faq.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Layout from "./../../Components/Layout/Layout";

function Shopping() {
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
              <span className="spanFaq">Shopping</span>
            </h3>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-12 col-lg-12  px-lg-0">
            <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda">Shopping</h3>

            {[
              {
                id: 1,
                question: "Can I place bulk orders on Tannis?",
                answer:
                  "Of course, and we’d love to help. Please write to us at help@Tannisbeauty.com, and someone from Tannis will connect with you for the same.",
              },
              {
                id: 2,
                question: "Does Tannis provide a product warranty/guarantee?",
                answer:
                  "All Tannis merchandise is authentic and sourced directly from the brands that we work with. We take the warranty provided by the manufacturer/brand for all products. FYI, beauty products usually have a shelf-life of 8 months to 3 years, depending on the product type. You can check the exact Shelf life of your purchase on the product page under the Product Details section.",
              },
              {
                id: 3,
                question: "Does Tannis deliver outside of India?",
                answer:
                  "While we’d love to, we currently only deliver within India.",
              },
              {
                id: 4,
                question: "Why doesn't Tannis deliver to my location?",
                answer:
                  "We’re excited you chose Tannis for your beauty needs. We’re still figuring things out and continuously increasing our reach by partnering with reliable courier companies. We should definitely be able to get to you soon.",
              },
              {
                id: 5,
                question: "What does Out Of Stock mean?",
                answer:
                  "Out Of Stock means the product is currently unavailable in the Tannis warehouse. Remember to hit the ‘Notify Me’ tab on the product page to get notified once the product is back in stock.",
              },
              {
                id: 6,
                question: "How does Tannis pack my products for delivery?",
                answer:
                  "We try our best to reduce the risk of damage for every order. Our products are marked in boxes and covered in a plastic layer. Each individual product is packaged in bubble wrap, and fragile items like bottles are safely secured with additional bubble wrap.",
              },
              {
                id: 7,
                question: "How does Tannis's delivery process work?",
                answer: (
                  <span>
                    We’re stoked to receive your order. Once our system
                    processes it, your products are inspected thoroughly to
                    ensure they are in excellent condition. After passing the
                    final round of quality checks, they are packed and handed
                    over to our trusted delivery partners. Our delivery partners
                    then bring the package to you as soon as possible. In case,
                    they are unable to reach your provided address, or at a
                    suitable time, they will contact you.
                  </span>
                ),
              },
              {
                id: 8,
                question: "What is Tannis Red?",
                answer:
                  "Tannis Red is your all-access pass to luxury beauty. Explore the best of premium, luxe and niche brands under one umbrella.",
              },
              {
                id: 9,
                question: "Is there a membership for Tannis Red?",
                answer:
                  "Tannis Red is available for everyone and anyone interested in premium, luxury and niche brands.",
              },
              {
                id: 10,
                question: "Are products on Tannis Red medical-grade?",
                answer:
                  "The products available on Tannis Website/ App are cosmetic-grade; they are not medical-grade products.",
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

export default Shopping;
