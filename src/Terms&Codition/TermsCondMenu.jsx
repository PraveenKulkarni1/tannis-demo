import React from "react";

import { NavLink } from "react-router-dom";
function TermsCondMenu() {
  const menuItems = [
    {
      path: "/terms-conditions",
      title: "Terms & Conditions",
    },
    {
      path: "/fees-payments",
      title: "Fees and Payments",
    },
    {
      path: "/cancel-refund-policy",
      title: "Cancellation and Refound Police ",
    },
    {
      path: "/private-policy",
      title: "Private Policy",
    },
    {
      path: "/shipping-delivery-policy",
      title: "Shipping & Delivery Policy",
    },
    {
      path: "/rewards-policy",
      title: "Rewards Policy",
    },
    {
      path: "/promotions-terms-condtions",
      title: "Promotions Terms Condtions",
    },
  ];
  return (
    <div
      className="user-menu-container sticky-top "
      style={{ top: "130px", zIndex: "1" }}
    >
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
              <div className="text-container">
                <h6 className="usermenuH6">{item.title}</h6>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default TermsCondMenu;
