// import React from "react";
// import "./detailProduct.css";
// import Layout from "./../Layout/Layout";
// import p1 from "../../assets/p1.avif";
// import p2 from "../../assets/p2.avif";
// import p3 from "../../assets/p3.avif";
// import wish1 from "../../assets/wish1.jpg";
// import wish2 from "../../assets/wish2.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useState } from "react";
// import UseMediaQuery from "./../../UseMediaQuery";
// import PdtDetail from "./PdtDetail";
// import ProRating from "./ProRating";
// import MoreToLike from "./../SliderPage/MoreToLike";

// const DetailProduct = () => {
//   const isMobile = UseMediaQuery("(max-width:486px)");
//   const data = [
//     { id: 0, img: p1 },
//     { id: 1, img: p2 },
//     { id: 2, img: p3 },
//     { id: 3, img: wish1 },
//     { id: 4, img: wish2 },
//   ];
//   const [sliderData, setSliderData] = useState(data[0]);
//   const handleClick = (id) => {
//     const slider = data[id];
//     setSliderData(slider);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };
//   return (
//     <Layout>
//       <div className="container ">
//         <div className="row m-2 d-flex justify-content-between">
//           <div className="col-md-2 ">
//             {data?.map((item, i) => {
//               return (
//                 <div className="m-2 delCol2" key={i}>
//                   <img
//                     className={sliderData.id === i ? "pSliderclick" : ""}
//                     src={item.img}
//                     height="60px"
//                     width="60px"
//                     onClick={() => handleClick(i)}
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           <div className="col-md-4 ">
//             {isMobile ? (
//               <Slider {...settings}>
//                 {data?.map((item, i) => {
//                   return (
//                     <div className="mt-5" key={i}>
//                       <img src={item.img} className="slidImg" />
//                     </div>
//                   );
//                 })}
//               </Slider>
//             ) : (
//               <div className="mt-5">
//                 <img src={sliderData.img} className="slidImg" />
//               </div>
//             )}
//           </div>

//           <div className="col-md-5">
//             <PdtDetail />
//           </div>
//         </div>
//       </div>
//       <ProRating />
//       <MoreToLike />
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
      <div className="container ">
        <div className="row m-2 d-flex justify-content-between">
          <div className="col-md-6">
            <div
              className="row sticky-top d-flex justify-content-around"
              style={{ top: "130px", zIndex: "1" }}
            >
              <div className="col-md-2 ">
                {data?.map((item, i) => {
                  return (
                    <div className="m-2 delCol2 " key={i}>
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

              <div className="col-md-6 ">
                {isMobile ? (
                  <Slider {...settings}>
                    {data?.map((item, i) => {
                      return (
                        <div className="mt-5" key={i}>
                          <img src={item.img} className="slidImg" />
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <div className="mt-5">
                    <img src={sliderData.img} className="slidImg" />
                  </div>
                )}
              </div>
            </div>
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
