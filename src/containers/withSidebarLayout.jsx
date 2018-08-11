import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export const withSidebarLayout = Wrapped => props => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Wrapped {...props} />
      </div>
    </div>
  );
};

export default withSidebarLayout;
