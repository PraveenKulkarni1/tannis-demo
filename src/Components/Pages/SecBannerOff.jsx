// import React, { useState } from "react";
// import Slider from "react-slick";
// import "./secBannerOff.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import secBan1 from "../../assets/secBan1.avif";
// import secBan2 from "../../assets/secBan2.avif";
// import { NavLink } from "react-router-dom";

// function SecBannerOff() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 486,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
//   const BannerData = [secBan1, secBan2];
//   return (
//     <div className="container-fluid  mt-xl-5 mt-xl-5 mt-lg-5 mt-md-3  mt-sm-2 mt-2">
//       <div className="row">
//         <Slider {...settings}>
//           {BannerData?.map((item, index) => (
//             <NavLink to="/products" className="col-12 secBannerContainer">
//               <img
//                 src={item}
//                 alt={`Banner ${index + 1}`}
//                 className="img-fluid"
//               />
//             </NavLink>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default SecBannerOff;

import React, { useState, useEffect } from "react";
import "../SliderPage/newSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import secBan1 from "../../assets/secBan1.avif";
import secBan2 from "../../assets/secBan2.avif";
import "./secBannerOff.css";

import axios from "axios";

const SecBannerOff = () => {
  const [banners, setBanners] = useState([]);

  function Arrow(props) {
    const { className, style, onClick, icon } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
          color: "blue",
          zIndex: 1,
          margin: "10%",
        }}
        onClick={onClick}
      >
        {icon}
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    getBanner();
  }, []);
  const getBanner = async () => {
    try {
      const result = await axios.get("https://tannis.in/api/banners/");
      setBanners(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
        <div className="col-12 ">
          <>
            <Slider {...settings}>
              {banners.length > 0 &&
                banners?.map((item, i) => {
                  let { title, description, image, brand } = item;
                  return (
                    <>
                      <div
                        className="ssecOneImg1 d-flex justify-content-around align-items-start flex-column  rounded-2"
                        style={{
                          backgroundImage: `url(https://tannis.in${image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="px-5">
                          <h1 className="sBannerh1">{title}</h1>
                          <p
                            className="sBannerp"
                            dangerouslySetInnerHTML={{ __html: description }}
                          ></p>
                          <button className="ssec1Btn">Shop Now</button>
                        </div>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </>
        </div>
      </div>
    </div>
  );
};

export default SecBannerOff;
