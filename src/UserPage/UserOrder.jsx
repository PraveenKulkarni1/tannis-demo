import React from "react";
import Layout from "../Components/Layout/Layout";
import UserMemu from "../User/UserMemu";
import "./userOrder.css";

function UserOrder() {
  return (
    <Layout>
      <div className="container my-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMemu />
          </div>
          <div className="col-md-9">Order Product</div>
        </div>
      </div>
    </Layout>
  );
}

export default UserOrder;
