import React from "react";
import "./offerHome.css";
import Layout from "./../Components/Layout/Layout";
import DealOfDay from "./DealOfDay";
import NewSlider from "./../Components/SliderPage/NewSlider";
import DealToSheal from "./DealToSheal";
import Statistics from "./Statistics";
import OfferInFocus from "./OfferInFocus";
import OfferBanner from "./OfferBanner";
import CantMiss from "./CantMiss";

function OfferHome() {
  return (
    <Layout>
      <OfferBanner />
      <DealOfDay />

      <DealToSheal />
      <OfferInFocus />
      <CantMiss />
      <Statistics />
    </Layout>
  );
}

export default OfferHome;
