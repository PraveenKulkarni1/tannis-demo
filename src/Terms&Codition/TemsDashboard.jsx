import React from "react";
import Layout from "./../Components/Layout/Layout";
import TermsCondMenu from "./TermsCondMenu";

function TemsDashboard() {
  return (
    <Layout>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <TermsCondMenu />
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </Layout>
  );
}

export default TemsDashboard;
