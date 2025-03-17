import React from "react";
import { ChevronDownIcon, UserCircleIcon } from "lucide-react";
import Menu from "@/modules/canvas/components/Menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-information">
        <div className="header-logo">Logo.</div>
        <div className="header-menu">
          <Menu />
          <span className="header-menu__label">Menu</span>
        </div>
      </div>

      <div className="header-user">
        <div className="header-avatar">
          <UserCircleIcon />
        </div>
        <div className="header-name">John Doe</div>
        <div className="header-action">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
