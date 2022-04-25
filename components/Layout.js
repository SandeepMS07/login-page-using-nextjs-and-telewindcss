import React from "react";
import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";

const Layout = ({ Children }) => {
  return (
    <>
      <Dashboard />
      {Children}
    </>
  );
};

export default Layout;
