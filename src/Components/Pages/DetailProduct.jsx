// import React from "react";
// import "./detailProduct.css";
// import { baseUrl } from "./config";
// import Layout from "./../Layout/Layout";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import UseMediaQuery from "./../../UseMediaQuery";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import p1 from "../../assets/p1.avif";
// import p2 from "../../assets/p2.avif";
// import p3 from "../../assets/p3.avif";
// import wish1 from "../../assets/wish1.jpg";
// import wish2 from "../../assets/wish2.jpg";

// const DetailProduct = () => {
//   const images = [p1, p2, p3, wish1, wish2];
//   const NextArrow = ({ onClick }) => (
//     <div className="wishArrow wishNext" onClick={onClick}>
//       <IoIosArrowForward />
//     </div>
//   );

//   const PrevArrow = ({ onClick }) => (
//     <div className="wishArrow wishPrev " onClick={onClick}>
//       <IoIosArrowBack />
//     </div>
//   );

//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <img src={images[i]} alt={`Slide ${i + 1}`} />
//         </a>
//       );
//     },
//     infinite: false,
//     slidesToShow: 4,
//     autoplay: false,
//     dotsClass: "slick-dots slick-thumb",
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 486,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//     // Update the state when the slider changes
//   };
//   return (
//     <Layout>
//       <>
//         <div className="">
//           <Slider {...settings}>
//             {images.map((img, index) => (
//               <div key={index}>
//                 <img src={img} alt={`Slide ${index + 1}`} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </>
//     </Layout>
//   );
// };

// export default DetailProduct;

import React from "react";
import "./detailProduct.css";
import Layout from "./../Layout/Layout";
import p1 from "../../assets/p1.avif";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.avif";
import wish1 from "../../assets/wish1.jpg";
import wish2 from "../../assets/wish2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import UseMediaQuery from "./../../UseMediaQuery";
import PdtDetail from "./PdtDetail";
import ProRating from "./ProRating";
import MoreToLike from "./../SliderPage/MoreToLike";

const DetailProduct = () => {
  const isMobile = UseMediaQuery("(max-width:486px)");
  const data = [
    { id: 0, img: p1 },
    { id: 1, img: p2 },
    { id: 2, img: p3 },
    { id: 3, img: wish1 },
    { id: 4, img: wish2 },
  ];
  const [sliderData, setSliderData] = useState(data[0]);
  const handleClick = (id) => {
    const slider = data[id];
    setSliderData(slider);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Layout>
      <div className="container">
        <div className="row m-2 d-flex justify-content-between">
          <div className="col-md-2">
            {data?.map((item, i) => {
              return (
                <div className="m-2 delCol2" key={i}>
                  <img
                    className={sliderData.id === i ? "pSliderclick" : ""}
                    src={item.img}
                    height="60px"
                    width="60px"
                    onClick={() => handleClick(i)}
                  />
                </div>
              );
            })}
          </div>

          <div className="col-md-4 ">
            {isMobile ? (
              <>
                <Slider {...settings}>
                  {data?.map((item, i) => {
                    return (
                      <>
                        <div className="mt-5">
                          <img src={item.img} className="slidImg" />
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </>
            ) : (
              <>
                {" "}
                <div className=" mt-5">
                  <img src={sliderData.img} className="slidImg" />
                </div>
              </>
            )}
          </div>

          <div className="col-md-5">
            <PdtDetail />
          </div>
        </div>
      </div>
      <ProRating />
      <MoreToLike />
    </Layout>
  );
};

export default DetailProduct;
