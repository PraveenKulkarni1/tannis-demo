import React from "react";
import "./userMenu.css";
import { NavLink, Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { GiDialPadlock } from "react-icons/gi";
import { TfiHelpAlt } from "react-icons/tfi";
import { BsPersonPlusFill } from "react-icons/bs";
import { CgCardSpades } from "react-icons/cg";

function UserMenu() {
  const menuItems = [
    {
      path: "/profile",
      icon: <IoPersonOutline size={24} className="usermenuIcon" />,
      title: "Personal Details",
      description: "Contact Details & Build my Profile",
    },
    {
      path: "/order",
      icon: <FiBox size={24} className="usermenuIcon" />,
      title: "Order",
      description: "Check online & in-store orders",
    },
    {
      path: "/address",
      icon: <CiLocationOn size={24} className="usermenuIcon" />,
      title: "Addresses",
      description: "Manage delivery addresses",
    },
    {
      path: "/",
      icon: <GiDialPadlock size={24} className="usermenuIcon" />,
      title: "TREATS",
      description: "Special rewards & exclusive benefits",
    },
    {
      path: "/about-us",
      icon: <IoPersonOutline size={24} className="usermenuIcon" />,
      title: "About Us",
      description: "Welcome to our world of beauty",
    },
    {
      path: "/faq",
      icon: <TfiHelpAlt size={24} className="usermenuIcon" />,
      title: "Help & FAQs",
      description: "Reach out to us for support",
    },
    {
      path: "/refer",
      icon: <BsPersonPlusFill size={24} className="usermenuIcon" />,
      title: "Refer & Earn",
      description: "Earn up to 1000 points with referrals",
    },
    {
      path: "/top-shelf",
      icon: <CgCardSpades size={24} className="usermenuIcon" />,
      title: "Top Shelf",
      description: "Beauty news, reviews, and trends",
    },
  ];
  return (
    <>
      <div
        className="user-menu-container   "
        // style={{ top: "130px", zIndex: "-1000" }}
      >
        <h3 className="userMenuh1 my-0 my-xl-3 my-lg-3 my-md-2 my-sm-1">
          My Account
        </h3>
        <div className="user-menu-list">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "userMenuList activeMenu" : "userMenuList"
              }
            >
              <div className="menu-item">
                <div className="icon-container">{item.icon}</div>
                <div className="text-container">
                  <h6 className="usermenuH6 ">{item.title}</h6>
                  <p className="usermenuP">{item.description}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <ul className="ProfilesubUl d-flex gap-2  flex-column mt-2 mt-xl-5 mt-lg-5 mt-md-3  mt-sm-3">
          <li>
            <Link to="/write-to-us" className="">
              Conatct Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="">
              Help & Support
            </Link>
          </li>{" "}
          <li>
            <Link to="/private-policy" className="">
              Privacy Policy
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/logout" className="logAccount">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

// Menu Items Data

export default UserMenu;
