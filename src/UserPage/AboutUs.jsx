import React from "react";
import "./userProfile.css";
import "./aboutUs.css";
import Layout from "../Components/Layout/Layout";
import ab from "../assets/ab.jpg";
import abImg from "../assets/abImg.avif";
function AboutUs() {
  return (
    <Layout>
      <div className="container-fluid aboutusBg">
        <div className="row">
          <div
            className="col-12 aboutusBg"
            style={{ backgroundImage: `url(${ab})` }}
          >
            <h1 className="abth1 d-flex justify-content-center align-items-center my-2 my-xl-3 my-lg-3 my-md-3 my-sm-3 ">
              Hi,We're <span className="abtSpan">Tannis</span>
            </h1>
            <h2 className="text-center abth2">
              {" "}
              Welcome to our beauty of world
            </h2>
          </div>
          <div className="col-12 col-12 d-flex justify-content-center align-items-center flex-column abtCol2 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
            <p className="abtPara text-center">
              Tannis is inspired by the Goddess Rati, who symbolises love,
              passion and beauty. The name Tannis recognises your inner
              superpower that makes you feel beautiful on the inside and out. It
              celebrates the unique spirit that makes you – truly you.
            </p>
            <p className="abtPara text-center">
              We understand that beauty means different things to different
              people, and that it can change from day to day and mood to mood.
              Tannis celebrates that feeling.
            </p>
            <p className="abtPara text-center">
              At Tannis, we curate the best global and homegrown beauty brands
              and inspire you to explore and express your every idea of beauty.
            </p>
            <p className="abtPara text-center">
              We are here to be your companion in this journey – For every day,
              every mood, every you.
            </p>
          </div>
          <div className="col-12">
            <img src={abImg} className="abcol3Img" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
