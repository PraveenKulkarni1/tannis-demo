import React, { useState, useLayoutEffect, useEffect } from "react";
import "./proReview.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import p1 from "../../assets/p1.avif";
import Stars from "./../Home/Stars";
function Review() {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const [isOpen, setIsOpen] = useState({});

  const [showReadMoreBtn, setShowReadMoreBtn] = useState(false);
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

  const data = [
    { color: " #f00000", name: "Red" },
    { color: "#994449", name: "Purple" },
  ];
  const [shadeSelect, setShadeSelect] = useState(0);
  const reviewData = [
    {
      name: "Kulpreet Kaur",
      date: "22 Jan, 2025",
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
        "Amazing product! Keeps my lips moisturized throughout the day. Highly recommended for winters!",
      title: "Great for winters",
      rating: "4.5",
    },
    {
      name: "Emily Smith",
      date: "5 Mar, 2025",
      image: p1,
      description:
        "The texture is smooth, and it glides perfectly on my lips. However, I feel like it needs frequent reapplication.",
      title: "Nice but requires reapplication",
      rating: "4.0",
    },
    {
      name: "Arjun Patel",
      date: "18 Apr, 2025",
      image: p1,
      description:
        "I love the fragrance and the tint it gives, but I wish it lasted longer. Overall, a decent buy.",
      title: "Smells great but doesn't last long",
      rating: "3.8",
    },
    {
      name: "Sophia Martinez",
      date: "30 May, 2025",
      image: p1,
      description:
        "Very hydrating and works well overnight! My lips feel so soft in the morning. Will repurchase for sure!",
      title: "Perfect for overnight hydration",
      rating: "5.0",
    },
    {
      name: "Liam Johnson",
      date: "12 Jun, 2025",
      image: p1,
      description:
        "Good product but slightly overpriced. There are similar options available for a lower price.",
      title: "A bit expensive",
      rating: "3.7",
    },
  ];

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const handleSelect1 = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };

  useEffect(() => {
    const btnVisibility = {};
    setTimeout(() => {
      reviewData.forEach((_, index) => {
        const element = document.getElementById(`review-text-${index}`);
        if (element) {
          btnVisibility[index] = element.scrollHeight > element.clientHeight;
        }
      });
      setShowReadMoreBtn(btnVisibility);
    }, 100);
  }, []);

  const toggleReadMore = (index) => {
    setIsOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-12 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
            <h3 className="proRatMain">Review</h3>
          </div>
        </div>
        <div className="row  rev1Cont reviewNav d-flex justify-content-between">
          <div className="col-12 d-flex justify-content-between">
            <h6 className="revh1 mt-2">Filter By</h6>

            <div className="btn-group">
              <button
                className="btn btn-secondary btn-sm revButton"
                type="button"
              >
                Shades
              </button>
              <button
                type="button"
                className=" dropdown-toggle-split border-0"
                onClick={toggleDropdown2}
              >
                {dropdownOpen2 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen2 && (
                <ul className="dropdown-menu show mt-5">
                  <div className="d-flex justify-content-between">
                    {data?.map((item, i) => {
                      return (
                        <>
                          <div key={i} onClick={() => setShadeSelect(i)}>
                            <li className="d-flex align-items-center">
                              <div
                                className={`revCshades ${
                                  shadeSelect === i ? "revShadeActve" : ""
                                }`}
                                style={{
                                  backgroundColor: `${item.color}`,
                                }}
                                onClick={() => setShadeSelect(i)}
                              ></div>
                              <h2 className="revColorName mt-2">{item.name}</h2>
                            </li>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <div className="d-flex justify-content-between">
                    <Link to="/" className="revButton3">
                      Clear All
                    </Link>
                    <Link to="/" className="revApply">
                      Apply
                    </Link>
                  </div>
                </ul>
              )}
            </div>
            <div className="btn-group">
              <button
                className="btn btn-secondary btn-sm revButton"
                type="button"
              >
                Rating
              </button>
              <button
                type="button"
                className=" dropdown-toggle-split border-0"
                onClick={toggleDropdown1}
              >
                {dropdownOpen1 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen1 && (
                <ul className="dropdown-menu show mt-5">
                  <li className="dropdown-item ">
                    <div className=" d-flex justify-content-between">
                      <div className="">
                        <span className="me-3">
                          <span className="pdtText"> 5</span>{" "}
                          <FaStar size={15} className="proFastar" />
                          <span className="pdtText"> (16)</span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-between">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="option1"
                          checked={selectedOptions.option1}
                          onChange={() => handleSelect1("option1")}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-item ">
                    <div className=" d-flex justify-content-between">
                      <div className="">
                        <span className="me-3">
                          <span className="pdtText"> 4</span>{" "}
                          <FaStar size={15} className="proFastar" />
                          <span className="pdtText"> (12)</span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-between">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="option1"
                          checked={selectedOptions.option2}
                          onChange={() => handleSelect1("option2")}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-item ">
                    <div className=" d-flex justify-content-between">
                      <div className="">
                        <span className="me-3">
                          <span className="pdtText"> 3</span>{" "}
                          <FaStar size={15} className="proFastar" />
                          <span className="pdtText"> (10)</span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-between">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="option1"
                          checked={selectedOptions.option3}
                          onChange={() => handleSelect1("option3")}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-item ">
                    <div className=" d-flex justify-content-between">
                      <div className="">
                        <span className="me-3">
                          <span className="pdtText"> 2</span>{" "}
                          <FaStar size={15} className="proFastar" />
                          <span className="pdtText"> (0)</span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-between">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="option1"
                          checked={selectedOptions.option4}
                          onChange={() => handleSelect1("option4")}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-item ">
                    <div className=" d-flex justify-content-between">
                      <div className="">
                        <span className="me-3">
                          <span className="pdtText"> 1</span>{" "}
                          <FaStar size={15} className="proFastar" />
                          <span className="pdtText"> (0)</span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-between">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="option1"
                          checked={selectedOptions.option5}
                          onChange={() => handleSelect1("option5")}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <div className="d-flex justify-content-between">
                    <Link to="/" className="revButton3">
                      Clear All
                    </Link>
                    <Link to="/" className="revApply">
                      Apply
                    </Link>
                  </div>
                </ul>
              )}
            </div>

            <button className="revButtonImg ">Review with image</button>
            <button className="revButton2 text-end">Reset Filter</button>
          </div>

          {/* <div className="col-4 text-end">
            <button className="revButton2">Reset Filter</button>
          </div> */}
        </div>
      </div>
      <div
        className="container reviewBorder1 d-flex gap-2 "
        style={{ rowGap: "10px" }}
      >
        <div className="row  px-3 ">
          {reviewData.length > 0 &&
            reviewData?.map((item, index) => {
              return (
                <>
                  <div className="col-md-6  mx-auto my-2  revviewBorder2  ">
                    <Stars
                      stars={parseFloat(item.rating)}
                      className="text-start me-2"
                    />
                    <h2 className="revh1">{item.title}</h2>

                    <p
                      id={`review-text-${index}`}
                      style={isOpen[index] ? paraWithout : paragraphStyle}
                    >
                      {item.description}
                    </p>

                    {showReadMoreBtn[index] && (
                      <button
                        className="revReadMore"
                        onClick={() => toggleReadMore(index)}
                      >
                        {isOpen[index] ? "Read Less" : "Read More"}
                      </button>
                    )}
                    <div className="my-2">
                      <img src={p1} className="img-fluid revImg" />
                    </div>

                    <div className="d-flex justify-content-between ">
                      <div className="d-flex gap-2">
                        <p className="revName">{item.name}</p>
                        <PiSealCheckFill
                          className="mt-1 "
                          size={15}
                          style={{ color: "green" }}
                        />
                        <p className="pdtSpan">{item.date}</p>
                      </div>
                      <div className="d-flex gap-1">
                        <button className="likeBtn">
                          {" "}
                          <BiLike />
                        </button>
                        <p className="revName mt-2">4</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Review;
