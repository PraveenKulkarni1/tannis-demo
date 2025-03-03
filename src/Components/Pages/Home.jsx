import React from "react";
import NewSlider from "./../SliderPage/NewSlider";

import SecHeader from "./../Layout/SecHeader";

import TopCate from "./../Home/TopCate";
import WishList from "./../Home/WishList";
import Layout from "./../Layout/Layout";
import Statistics from "./../../Offers/Statistics";
import RecentView from "./RecentView";
import TrendingOffer from "./../Home/TrendingOffer";
import ForYou from "./../Home/ForYou";
import HomeLexury from "../Home/HomeLexury/HomeLexury";
import OnRadar from "./OnRadar";
import SecBannerOff from "./SecBannerOff";

const Home = () => {
  return (
    <Layout>
      {/* <div className="secHeadNav">
        <SecHeader />
      </div> */}

      <NewSlider />
      <TopCate />

      <TrendingOffer />
      <WishList />
      <RecentView />
      <OnRadar />
      <SecBannerOff />
      <HomeLexury />
      <ForYou />
      <Statistics />
    </Layout>
  );
};

export default Home;
