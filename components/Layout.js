import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ Children }) => {
  return (
    <>
      <Sidebar />
      {Children}
    </>
  );
};

export default Layout;
