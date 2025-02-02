import React from "react";
import "./userProfile.css";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";

function ReferEarn() {
  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMemu />
          </div>
          <div className="col-md-9">Faq Product</div>
        </div>
      </div>
    </Layout>
  );
}

export default ReferEarn;
