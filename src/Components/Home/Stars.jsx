import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./stars.css";
const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icons" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icons" />
        ) : (
          <AiOutlineStar className="icons" />
        )}
      </span>
    );
  });
  return <div className="icon-style">{ratingStar}</div>;
};

export default Stars;
