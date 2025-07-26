import React from "react";
import "./forYou.css";
import ReactPlayer from "react-player";
import makeup from "../../assets/BeautyMakeUp.mp4";
import UseMediaQuery from "../../UseMediaQuery";
function ForYou() {
  const isMobile = UseMediaQuery("(max-width:486px)");
  return (
    <>
      {isMobile ? (
        <>
          <div className="container forBgMobile">
            <div className="row px-3">
              <div className="col-md-7  my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
                {/* Responsive Video Wrapper */}

                <ReactPlayer
                  url={makeup}
                  controls={false}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-md-5 my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
                <h1 className="forh1">For You</h1>
                <p className="forp">
                  This is your space. Get access to curated content, handpicked
                  offers, and personalised products just for you.
                </p>
                <button className="forBtn">Explore Now</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container forYouBg">
            <div className="row px-3">
              <div className="col-5 my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
                <h1 className="forh1">For You</h1>
                <p className="forp">
                  This is your space. Get access to curated content,
                  <br /> handpicked offers, and personalised products just for
                  you.
                </p>
                <button className="forBtn">Explore Now</button>
              </div>
              <div className="col-7   forCol2 my-xl-5 my-xxl-5 my-lg-5 my-md-3 my-sm-2 my-2">
                {/* Responsive Video Wrapper */}
                <div className="forVideo px-xl-4 px-lg-4 px-3">
                  <ReactPlayer
                    url={makeup}
                    controls={false}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ForYou;
