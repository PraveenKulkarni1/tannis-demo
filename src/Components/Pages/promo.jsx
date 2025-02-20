import React, { useState, useLayoutEffect, useRef } from "react";
import "./proReview.css";
import { PiSealCheckFill } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import p1 from "../../assets/p1.avif";
import Stars from "./../Home/Stars";

function Review() {
  const [openReviews, setOpenReviews] = useState({}); // State for tracking which reviews are open
  const [showReadMoreBtns, setShowReadMoreBtns] = useState({}); // Store button visibility per review

  const paragraphStyle = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    fontSize: "15px",
    fontFamily: "PP Object sans",
  };

  const paraWithout = {
    fontSize: "15px",
    fontFamily: "PP Object sans",
  };

  const reviewData = [
    {
      name: "kulpreet kaur",
      date: "22 Jan ,2025",
      image: p1,
      description:
        "This lip balm is good and better than Laneige, but after using it for 2 months, it has developed an irritating smell, and it's not even expired yet. I don't know why?",
      title: "It developed an irritating smell",
      rating: "3.5",
    },
    {
      name: "John Doe",
      date: "10 Feb, 2025",
      image: p1,
      description:
        "Amazing product! Keeps my lips moisturized throughout the day. Highly recommended for winters! Amazing product! Keeps my lips moisturized throughout the day. Highly recommended for winters!",
      title: "Great for winters",
      rating: "4.5",
    },
  ];

  useLayoutEffect(() => {
    setTimeout(() => {
      const btnVisibility = {};
      reviewData.forEach((_, index) => {
        const element = document.getElementById(`review-text-${index}`);
        if (element) {
          btnVisibility[index] = element.scrollHeight > element.clientHeight;
        }
      });
      setShowReadMoreBtns(btnVisibility);
    }, 100);
  }, []);

  const toggleReadMore = (index) => {
    setOpenReviews((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <div
        className="container reviewBorder1 d-flex flex-wrap gap-2"
        style={{ rowGap: "10px" }}
      >
        <div className="row px-3">
          {reviewData.map((item, index) => (
            <div key={index} className="col-md-6 my-2 revviewBorder2">
              <Stars
                stars={parseFloat(item.rating)}
                className="text-start me-2"
              />
              <h2 className="revh1">{item.title}</h2>c
              <div className="my-2">
                <img
                  src={item.image}
                  className="img-fluid revImg"
                  alt="Review"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                  <p className="revName">{item.name}</p>
                  <PiSealCheckFill className="mt-1" size={15} />
                  <p className="pdtSpan">{item.date}</p>
                </div>
                <div className="d-flex gap-1">
                  <button className="likeBtn">
                    <BiLike />
                  </button>
                  <p className="revName mt-2">4</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Review;
