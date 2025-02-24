import React from "react";
import NewSlider from "./../SliderPage/NewSlider";

import SecHeader from "./../Layout/SecHeader";
import Offers from "./../Home/Offers";
import TopCate from "./../Home/TopCate";
import WishList from "./../Home/WishList";
import Layout from "./../Layout/Layout";
import Statistics from "./../../Offers/Statistics";

const Home = () => {
  return (
    <Layout>
      {/* <div className="secHeadNav">
        <SecHeader />
      </div> */}

      <NewSlider />
      <TopCate />
      <Offers />
      <WishList />
      <Statistics />
    </Layout>
  );
};

export default Home;
