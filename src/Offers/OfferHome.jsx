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
import BransToBang from "./BrandsToBang";
import HiddenGems from "./HiddenGems";
import LexuryBeauty from "./LexuryBeauty";

function OfferHome() {
  return (
    <Layout>
      <OfferBanner />
      <DealOfDay />

      <DealToSheal />
      <OfferInFocus />
      <BransToBang />
      <CantMiss />
      <HiddenGems />
      <LexuryBeauty />
      <Statistics />
    </Layout>
  );
}

export default OfferHome;
