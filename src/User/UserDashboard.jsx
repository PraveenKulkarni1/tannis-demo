import React from "react";
import Layout from "./../Components/Layout/Layout";
import UserMemu from "./UserMemu";

function UserDashboard() {
  return (
    <Layout>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-md-5">
            <UserMemu />
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDashboard;
