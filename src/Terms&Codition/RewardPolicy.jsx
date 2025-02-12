import React from "react";
import Layout from "./../Components/Layout/Layout";
import TermsCondMenu from "./TermsCondMenu";

function RewardPolicy() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-4 termsCol1">
            <TermsCondMenu />
          </div>
          <div className="col-md-8">
            <h3 className=" py-lg-3 py-xl-3 py-md-2 py-2 termHead my-2 my-xl-4 my-lg-4 my-md-3 my-sm-3 ">
              Tannis Terms and Conditions
            </h3>
            <p className="termsP">
              With a plethora of attractive offers and promotions running on our
              site, it’s you we want, to be the winner all the way. While every
              product we host on the site is something we would want to wear /
              use ourselves, not each of them is eligible for coupons,
              promotions or offers. They apply on select merchandise only. You
              can refer to individual offer eligibilities on a product page, to
              choose what you like best{" "}
            </p>
            <p className="termsP">
              If you choose to return or cancel purchase of any product, the
              amount that would be refunded to you would be the final product
              price on your invoice that you may have received after availing
              all offer benefits. This will, of course, be subject to a sign-off
              from our QC team after inspecting the returned items.{" "}
            </p>
            <p className="termsP">
              You would be eligible for the First Purchase Coupon if and only if
              you are about to make your first-ever buy on the site. However, if
              you wish to cancel or return your purchase, you will no longer be
              eligible for availing this offer again.{" "}
            </p>
            <p className="termsP">
              Please note that Tannis reserves the right to modify the terms and
              conditions of any of the promotions offered on the Platforms at
              any given time.{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RewardPolicy;
