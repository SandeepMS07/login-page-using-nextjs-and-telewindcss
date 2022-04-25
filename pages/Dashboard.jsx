import React from "react";
import Sidebar from "../components/Sidebar";
import InvoicePage from "../components/InvoicePage";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row-auto">
          <div className="grid grid-cols-2">
            <div >
              <Sidebar />
            </div>
            <div>
              <InvoicePage />
            </div>
          </div>
          {/* <InvoicePage /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
