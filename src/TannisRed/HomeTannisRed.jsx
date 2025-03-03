import React from "react";
import Layout from "./../Components/Layout/Layout";
import BannerTannisRed from "./BannerTannisRed";
import TopTannisRed from "./TopTannisRed";
import HomeMustHaves from "./../Components/Home/HomeLexury/HomeMustHaves";
import Statistics from "./../Offers/Statistics";
import BrandOfMonth from "./BrandOfMonth";
import InFocus from "./InFocus";

function HomeTannisRed() {
  return (
    <Layout>
      <BannerTannisRed />
      <TopTannisRed />
      <HomeMustHaves />
      <InFocus />
      <BrandOfMonth />
      <Statistics />
    </Layout>
  );
}

export default HomeTannisRed;
