// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdCurrencyRupee } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import p1 from "../../assets/p1.avif";
// import p2 from "../../assets/p2.avif";
// import p3 from "../../assets/p3.avif";
// import "./moreToLike.css";
// import axios from "axios";

// function MoreToLike() {
//   const data = [
//     {
//       img: p1,
//       title: "Inde Wild",
//       description: "Inde Wild Dewy Lip Treatment (15ml)",
//       price: "719",
//       offer1: "799",
//       offer2: "1 Offer",
//       offer3: "10%",
//       offer3: "10%",
//       ml: "15 ml",
//     },
//     {
//       img: p2,
//       title: "Inde Wild",
//       description: "Inde Wild Dewy Lip Treatment (15ml)",
//       price: "719",
//       offer1: "799",
//       offer2: "1 Offer",
//       offer3: "10%",
//       ml: "15 ml",
//     },
//     {
//       img: p3,
//       title: "Inde Wild",
//       description: "Inde Wild Dewy Lip Treatment (15ml)",
//       price: "719",
//       offer1: "799",
//       offer2: "1 Offer",
//       offer3: "10%",
//       ml: "15 ml",
//     },
//     {
//       img: p1,
//       title: "Inde Wild",
//       description: "Inde Wild Dewy Lip Treatment (15ml)",
//       price: "719",
//       offer1: "799",
//       offer2: "1 Offer",
//       offer3: "10%",
//       ml: "15 ml",
//     },
//     {
//       img: p2,
//       title: "Inde Wild",
//       description: "Inde Wild Dewy Lip Treatment (15ml)",
//       price: "719",
//       offer1: "799",
//       offer2: "1 Offer",
//       offer3: "10%",
//       ml: "15 ml",
//     },
//     {
//       img: p3,
//       title: "Inde Wild",
//       description: "Inde Wild Dewy Lip Treatment (15ml)",
//       price: "719",
//       offer1: "799",
//       offer2: "1 Offer",
//       offer3: "10%",
//       ml: "15 ml",
//     },
//     // Add more items as needed
//   ];
//   const [moredata, setMoreData] = useState([]);

//   const [isFirstSlide, setIsFirstSlide] = useState(true);
//   const [isLastSlide, setIsLastSlide] = useState(false);

//   const NextArrow = ({ onClick }) => (
//     <div
//       className={`moreLikeArrow moreLikeNext ${
//         isLastSlide ? "iconHidden" : ""
//       }`}
//       onClick={onClick}
//     >
//       <IoIosArrowForward />
//     </div>
//   );

//   const PrevArrow = ({ onClick }) => (
//     <div
//       className={`moreLikeArrow moreLikePrev ${
//         isFirstSlide ? "iconHidden" : ""
//       }`}
//       onClick={onClick}
//     >
//       <IoIosArrowBack />
//     </div>
//   );

//   const settings = {
//     infinite: false,
//     slidesToShow: 4,
//     autoplay: false,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 486,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//     beforeChange: (current, next) => {
//       setIsFirstSlide(next === 0);
//       setIsLastSlide(next === data.length - 4);
//     },
//   };

//   //API

//   useEffect(() => {
//     getMoreData();
//   }, []);
//   const getMoreData = async () => {
//     try {
//       const result = await axios.get("https://tannis.in/api/products/");
//       setMoreData(result.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
//       <div className="row">
//         <h1 className="homehTag">More Like This</h1>
//       </div>
//       <div className="row moreRow">
//         <Slider {...settings}>
//           {moredata.map((item, i) => (
//             <div key={i} className="col-md-4 col-sm-6 col-6 mb-3 ">
//               <div className="card moreCard border-0 shadow-sm gx-2">
//                 <div className="iconAbs d-flex justify-content-end align-items-center">
//                   <CiHeart className="ciHeart" />
//                 </div>
//                 <div className="iconRel">
//                   <img
//                     src={`https://tannis.in${item.thumbnail}`}
//                     className="card-img-top"
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="card-body">
//                   <p className="card-title proTitle">{item.brand}</p>
//                   <h6 className="card-text proText">{item.p_name}</h6>
//                   <h6 className="titilHead ">
//                     <MdCurrencyRupee />
//                     {item.mrp - item.discount}
//                     <span>
//                       <del className="delProduct">
//                         <MdCurrencyRupee />
//                         {item.mrp}
//                       </del>
//                       {item.discount && (
//                         <span className="offdes">
//                           {" "}
//                           ({Math.floor((item.discount / item.mrp) * 100)})%
//                         </span>
//                       )}
//                     </span>
//                   </h6>
//                   {/* <p className="offerP3">{item.offer2}</p> */}

//                   <div className="my-xl-5 my-lg-5 my-md-4 my-sm-2 my-2">
//                     <button className="moreCartBtn">Add to Bag</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default MoreToLike;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import p1 from "../../assets/p1.avif";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.avif";
import "./moreToLike.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
function MoreToLike() {
  const data = [
    {
      img: p1,
      title: "Inde Wild",
      description: "Inde Wild Dewy Lip Treatment (15ml)",
      price: "719",
      offer1: "799",
      offer2: "1 Offer",
      offer3: "10%",
      offer3: "10%",
      ml: "15 ml",
    },
    {
      img: p2,
      title: "Inde Wild",
      description: "Inde Wild Dewy Lip Treatment (15ml)",
      price: "719",
      offer1: "799",
      offer2: "1 Offer",
      offer3: "10%",
      ml: "15 ml",
    },
    {
      img: p3,
      title: "Inde Wild",
      description: "Inde Wild Dewy Lip Treatment (15ml)",
      price: "719",
      offer1: "799",
      offer2: "1 Offer",
      offer3: "10%",
      ml: "15 ml",
    },
    {
      img: p1,
      title: "Inde Wild",
      description: "Inde Wild Dewy Lip Treatment (15ml)",
      price: "719",
      offer1: "799",
      offer2: "1 Offer",
      offer3: "10%",
      ml: "15 ml",
    },
    {
      img: p2,
      title: "Inde Wild",
      description: "Inde Wild Dewy Lip Treatment (15ml)",
      price: "719",
      offer1: "799",
      offer2: "1 Offer",
      offer3: "10%",
      ml: "15 ml",
    },
    {
      img: p3,
      title: "Inde Wild",
      description: "Inde Wild Dewy Lip Treatment (15ml)",
      price: "719",
      offer1: "799",
      offer2: "1 Offer",
      offer3: "10%",
      ml: "15 ml",
    },
    // Add more items as needed
  ];
  const [moredata, setMoreData] = useState([]);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const NextArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow moreLikeNext ${
        isLastSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow moreLikePrev ${
        isFirstSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
      setIsLastSlide(next === data.length - 4);
    },
  };

  //API

  useEffect(() => {
    getMoreData();
  }, []);
  const getMoreData = async () => {
    try {
      const result = await axios.get("https://tannis.in/api/products/");
      setMoreData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
      <div className="row">
        <h1 className="homehTag">More Like This</h1>
      </div>
      <div className="row moreRow">
        <Slider {...settings}>
          {moredata.length > 0 &&
            moredata?.map((item, i) => {
              let {
                id,
                thumbnail,
                discount,
                category,
                p_name,
                brand,
                product_type,
                mrp,
                sub_category,
              } = item;
              return (
                <NavLink
                  to="/product-details"
                  className="d-flex col-md-4  moewDCard col-sm-6 col-6 mb-3 "
                >
                  <div className="card  productCard dealCard border-0 shadow-sm">
                    <div className="iconAbs d-flex justify-content-end align-items-center ">
                      <CiHeart className="ciHeart" />
                    </div>
                    <div className="iconRel">
                      <img
                        src={`https://tannis.in${thumbnail}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-title proTitle">{brand}</p>
                      <h6 className="card-text proText">
                        {p_name.substring(0, 50)}
                      </h6>
                      <h6 className="titilHead">
                        <MdCurrencyRupee />
                        {mrp - discount}
                        <span>
                          {discount && (
                            <del className="delProduct">
                              <MdCurrencyRupee />
                              {mrp}
                            </del>
                          )}
                          {discount && (
                            <span className="offdes">
                              {" "}
                              ({Math.floor((discount / mrp) * 100)})%
                            </span>
                          )}
                        </span>
                      </h6>
                      <p className="offerP3">1 Offer</p>
                      <p className="offerP4">15ml</p>
                      <button className="proCartBtn hoverButton">
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default MoreToLike;
