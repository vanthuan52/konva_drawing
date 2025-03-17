import React from "react";
import styles from "./Menu.module.scss";

interface SubMenuProps {
  items: { label: string }[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div className={styles["sub-menu"]}>
      {items.map((subItem) => (
        <div key={subItem.label} className={styles["menu-item"]}>
          {subItem.label}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
