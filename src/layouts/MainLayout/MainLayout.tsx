import React from "react";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div>
      <React.Fragment>
        <div className="main-layout">
          <Outlet />
        </div>
      </React.Fragment>
    </div>
  );
};

export default MainLayout;
