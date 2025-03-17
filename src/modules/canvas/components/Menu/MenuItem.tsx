import React, { useState } from "react";
import clsx from "clsx";
import SubMenu from "./SubMenu";
import styles from "./Menu.module.scss";

interface MenuItemProps {
  item: {
    label: string;
    icon?: any;
    subMenu?: { label: string }[];
    danger?: boolean;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div
      className={clsx(styles["menu-item"], { [styles["danger"]]: item.danger })}
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
    >
      <span>
        {item.icon} {item.label}
      </span>
      {item.subMenu && <span className="arrow">›</span>}
      {isSubMenuOpen && item.subMenu && <SubMenu items={item.subMenu} />}
    </div>
  );
};

export default MenuItem;
