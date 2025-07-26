// import React, { useState } from "react";
// import "./cartCoupen.css";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { PiSealCheckFill } from "react-icons/pi";
// import { FaIndianRupeeSign } from "react-icons/fa6";

// function CartCoupen() {
//   const [showMoreInfo, setShowMoreInfo] = useState(false);
//   const [isCouponApplied, setIsCouponApplied] = useState(false);

//   return (
//     <div className="container">
//       <div className="row">
//         {!isCouponApplied ? (
//           <div className="border-1">
//             <div className="row">
//               <div className="col-2 copBgImg">
//                 <p className="">15%OFF</p>
//               </div>
//               <div className="col-10 coupenBorder">
//                 <div className="d-flex justify-content-between">
//                   <div className="px-2">
//                     <h3 className="coph1 mt-2">RED</h3>
//                     <p className="copSpan">Save ₹2861.88 on this purchase!</p>
//                   </div>
//                   <div>
//                     <button
//                       className="couBtn"
//                       onClick={() => setIsCouponApplied(true)}
//                     >
//                       Apply
//                     </button>
//                   </div>
//                 </div>
//                 <div className="couDash px-2"></div>
//                 <div className="my-1 d-flex justify-content-between align-items-center px-2">
//                   <h3 className="copP1">Valid on select brands</h3>
//                   <button
//                     className="moreInfoBtn"
//                     onClick={() => setShowMoreInfo(!showMoreInfo)}
//                   >
//                     More Info{" "}
//                     {showMoreInfo ? (
//                       <FaChevronUp size={15} />
//                     ) : (
//                       <FaChevronDown size={15} />
//                     )}
//                   </button>
//                 </div>
//               </div>
//               <div className="row">
//                 <NavLink to="/products" className="col-12 viewAppBg">
//                   <div className="d-flex justify-content-between">
//                     <div className="viewApp"> View Applicable Products</div>
//                     <IoIosArrowForward size={15} className="viewApp" />
//                   </div>
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="container readBg px-2">
//             <div className="row">
//               <div className="col-auto">
//                 <PiSealCheckFill size={20} />
//               </div>

//               <div className="col">
//                 <h5 className="readh1">
//                   You have saved <FaIndianRupeeSign size={17} /> 500 with this
//                   code
//                 </h5>
//                 <h3 className="coph1 mt-2">RED</h3>
//               </div>

//               <div className="col-auto">
//                 <button
//                   className="couBtn ms-3"
//                   onClick={() => setIsCouponApplied(false)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showMoreInfo && !isCouponApplied && (
//           <>
//             <div className="row">
//               <div className="col-12 moreBorder">
//                 <h3 className="moreh1 px-2">More Information</h3>
//                 <p className="copP1 px-2">Valid till 31 Mar, 2025</p>
//               </div>
//             </div>

//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CartCoupen;

import React, { useState } from "react";
import "./cartCoupen.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";

function CartCoupen() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  return (
    <div className="container">
      <div className="row">
        {!isCouponApplied ? (
          <div className="border-1">
            <div className="row">
              <div className="col-2 copBgImg">
                <p className="">15%OFF</p>
              </div>
              <div className="col-10 coupenBorder">
                <div className="d-flex justify-content-between">
                  <div className="px-2">
                    <h3 className="coph1 mt-2">RED</h3>
                    <p className="copSpan">Save ₹2861.88 on this purchase!</p>
                  </div>
                  <div>
                    <button
                      className="couBtn"
                      onClick={() => setIsCouponApplied(true)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="couDash px-2"></div>
                <div className="my-1 d-flex justify-content-between align-items-center px-2">
                  <h3 className="copP1">Valid on select brands</h3>
                  <button
                    className="moreInfoBtn"
                    onClick={() => setShowMoreInfo(!showMoreInfo)}
                  >
                    More Info{" "}
                    {showMoreInfo ? (
                      <FaChevronUp size={15} />
                    ) : (
                      <FaChevronDown size={15} />
                    )}
                  </button>
                </div>
              </div>
              {showMoreInfo && !isCouponApplied && (
                <>
                  <div className="row">
                    <div className="col-12 moreBorder">
                      <h3 className="moreh1 px-2">More Information</h3>
                      <p className="copP1 px-2">Valid till 31 Mar, 2025</p>
                    </div>
                  </div>
                </>
              )}
              <div className="row">
                <NavLink to="/products" className="col-12 viewAppBg">
                  <div className="d-flex justify-content-between">
                    <div className="viewApp"> View Applicable Products</div>
                    <IoIosArrowForward size={15} className="viewApp" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="container readBg px-2">
            <div className="row">
              <div className="col-auto">
                <PiSealCheckFill size={20} />
              </div>

              <div className="col">
                <h5 className="readh1">
                  You have saved <FaIndianRupeeSign size={15} /> 500 with this
                  code
                </h5>
                <h3 className="coph1 mt-2">RED</h3>
              </div>

              <div className="col-auto">
                <button
                  className="couBtn ms-3"
                  onClick={() => setIsCouponApplied(false)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartCoupen;
