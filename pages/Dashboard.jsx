import React from "react";
import Sidebar from "../components/Sidebar";
import InvoicePage from "../components/InvoicePage";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="w-3/12">
              <Sidebar />
            </div>
            <div className="w-9/12">
              <InvoicePage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
