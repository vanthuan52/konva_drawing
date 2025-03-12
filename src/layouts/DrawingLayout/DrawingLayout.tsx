import React from "react";
import { Outlet } from "react-router-dom";
import "./DrawingLayout.scss";

const DrawingLayout = () => {
  return (
    <div>
      <React.Fragment>
        <div className="drawing-layout">
          <Outlet />
        </div>
      </React.Fragment>
    </div>
  );
};

export default DrawingLayout;
