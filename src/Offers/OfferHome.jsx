import React from "react";
import "./offerHome.css";
import Layout from "./../Components/Layout/Layout";
import DealOfDay from "./DealOfDay";
import NewSlider from "./../Components/SliderPage/NewSlider";
import DealToSheal from "./DealToSheal";

function OfferHome() {
  return (
    <Layout>
      <NewSlider />
      <DealOfDay />

      <DealToSheal />
    </Layout>
  );
}

export default OfferHome;
