import React from "react";
import "../userProfile.css";
import Layout from "../../Components/Layout/Layout";
import UserMemu from "../../User/UserMemu";
import "./faq.css";
import UseMediaQuery from "../../../src/UseMediaQuery";
import { NavLink, Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { TbFiretruck } from "react-icons/tb";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { TbCircleDashedLetterT } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
function Faq() {
  const isMobile = UseMediaQuery("(max-width:486px)");
  const menuItems = [
    {
      path: "/manage-account",
      icon: <IoPersonOutline size={24} className="fqqUsermenuIcon" />,
      title: "Manage Your Account",
    },
    {
      path: "/shopping",
      icon: <BiShoppingBag size={24} className="fqqUsermenuIcon" />,
      title: "Shopping",
    },
    {
      path: "/order-status",
      icon: <FiBox size={24} className="fqqUsermenuIcon" />,
      title: "Order-Status",
    },
    {
      path: "/cancel-refunds",
      icon: <TbFiretruck size={24} className="fqqUsermenuIcon" />,
      title: "Cancellations And Refunds",
    },
    {
      path: "/return-refund",
      icon: (
        <MdOutlineSwapHorizontalCircle size={24} className="fqqUsermenuIcon" />
      ),
      title: "Return And Refunds",
    },
    {
      path: "/faq-payments",
      icon: <MdPayment size={24} className="fqqUsermenuIcon" />,
      title: "Payments",
    },
    {
      path: "/faq-offers",
      icon: <CiDiscount1 size={24} className="fqqUsermenuIcon" />,
      title: "Offers And Promotions",
    },
    {
      path: "/autenticity",
      icon: (
        <IoIosCheckmarkCircleOutline size={24} className="fqqUsermenuIcon" />
      ),
      title: "Authenticity And Genuieness",
    },
    {
      path: "/genral-queries",
      icon: <MdOutlineHeadsetMic size={24} className="fqqUsermenuIcon" />,
      title: "Genral Queries",
    },
    {
      path: "/write-to-us",
      icon: <FiEdit size={24} className="fqqUsermenuIcon" />,
      title: "Write to us",
    },
    {
      path: "/tannis-tribute",
      icon: <TbCircleDashedLetterT size={24} className="fqqUsermenuIcon" />,
      title: "Tannis Tribute",
    },
  ];
  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row justify-content-center ">
          <div className="col-12 text-center my-4">
            <h3>Help Categories</h3>
          </div>

          {isMobile ? (
            <>
              {menuItems.map((item, i) => (
                <div key={i} className="col-12 g-2  ">
                  <NavLink to={item.path} className="faqBorder">
                    <div className="faqIcon-container">{item.icon}</div>
                    <h3 className="faqh3">{item.title}</h3>
                    <IoIosArrowForward size={18} className="faqh3" />
                  </NavLink>
                </div>
              ))}
            </>
          ) : (
            <>
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className="col-4 col-md-3 col-lg-3 d-flex g-3 justify-content-center "
                >
                  <NavLink to={item.path} className="faqBorder">
                    <div className="faqIcon-container">{item.icon}</div>
                    <h3 className="faqh3">{item.title}</h3>
                  </NavLink>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Faq;
