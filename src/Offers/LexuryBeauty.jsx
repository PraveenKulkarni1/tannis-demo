import React from "react";
import "./lexuryBeauty.css";
import OffersCard from "./OffersCard";
import OfferProducts from "./OfferProducts";
function LexuryBeauty() {
  return (
    <div className="container lexuryOffBg ">
      <div className="row ">
        <div className="col-12  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <h1 className="text-center lexuryh1">RED</h1>
          <h4 className="text-center homehTag">Lexury beauty for every you</h4>
        </div>
        <h4 className="">Offers on Tannis Red</h4>
        <OffersCard />
        <OfferProducts />
      </div>
    </div>
  );
}

export default LexuryBeauty;
