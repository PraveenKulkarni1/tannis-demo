import React from "react";
import "./referEarn.css";
import { FiCopy } from "react-icons/fi";
import UseMediaQuery from "../../src/UseMediaQuery";
function Rev() {
  const isMobile = UseMediaQuery("(max-width:768px)");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9 col-xl-9 mx-auto refBg  my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <div className="d-flex justify-content-end align-items-center flex-column my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
              <p className="refPara1">Exclusive Rewards Just For You</p>
              <p className="refPara2">
                Earn up to 1,000 points just by referring
              </p>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? (
        <>
          <div className="container px-2 my-2">
            <div className="row">
              <div className="col-12  my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
                <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda text-center ">
                  How It Works
                </h3>
              </div>
            </div>
          </div>
          <div className="container px-2 my-2">
            <div className="row ">
              <div className="col-12 d-flex justify-content-between gap-3">
                <div className="rewBorder1  p-3">
                  <div className="">
                    <p className="refh1">Your Reward</p>
                  </div>
                  <div className="">
                    <h3 className="refh1">200 points for first purchase</h3>
                    <p className="refAns">
                      when your referee buys for ₹ 1299 or more the first time
                    </p>
                  </div>
                </div>
                <div className="rewBorder2  p-3">
                  <div className="">
                    <p className="refh1">Your Friend's Reward</p>
                  </div>
                  <div className="">
                    <h3 className="refh1">200 points for first purchase</h3>
                    <p className="refAns">
                      when your referee buys for ₹ 1299 or more the first time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="conatiner px-2 my-2">
            <div className="row ">
              <div className="col-12 d-flex justify-content-center align-items-center ">
                <div className="text-center mb-3 ">
                  <button className="revBtn ">Refer now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-2 my-2">
            <div className="row  px-3">
              <div className="col-12 refdashborder d-flex justify-content-between align-items-center w-100">
                <p className=" refAns me-2 p-2">
                  <span className="refAns"> PRAV3950</span>
                </p>
                <p className="refAns">
                  Tap Now{" "}
                  <span className="">
                    {" "}
                    <FiCopy size={18} />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-12  my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
                <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 refHeda ">
                  How It Works
                </h3>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row p-0">
              <div className="col-md-8 p-0">
                <div className="rewBorder1 d-flex justify-content-around p-3">
                  <div className="">
                    <p className="refh1">Your Reward</p>
                  </div>
                  <div className="">
                    <h3 className="refh1">200 points for first purchase</h3>
                    <p className="refAns">
                      when your referee buys for ₹ 1299 or more the first time
                    </p>
                  </div>
                </div>
                <div className="rewBorder2 d-flex justify-content-around p-3">
                  <div className="">
                    <p className="refh1">Your Friend's Reward</p>
                  </div>
                  <div className="">
                    <h3 className="refh1">200 points for first purchase</h3>
                    <p className="refAns">
                      when your referee buys for ₹ 1299 or more the first time
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="refBorder3  p-3 ">
                  <p className="refh1 ">Refer & Earn</p>
                  <p className="refAns text-justify">
                    Refer our app to your friends and family to earn  200 Tira
                    points for each member who signs u
                  </p>
                  <p className="refdashborder refAns me-2 p-2">
                    <FiCopy size={18} />
                    <span className=""> PRAV3950</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Rev;
