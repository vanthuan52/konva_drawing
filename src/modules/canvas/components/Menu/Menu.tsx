import { File, Settings, Trash, MenuIcon, Pencil } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useMenuState } from "@/modules/canvas/hooks/useMenuState";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const menuData = [
  { label: "File", icon: <File /> },
  { label: "Edit", icon: <Pencil /> },
  {
    label: "Settings",
    icon: <Settings />,
    subMenu: [
      { label: "List" },
      { label: "Doc" },
      { label: "Form" },
      { label: "Whiteboard" },
      { label: "Folder" },
    ],
  },
  { label: "Delete", icon: <Trash />, danger: true },
];

const Menu: React.FC = () => {
  const { openMenu, toggleMenu } = useMenuState();
  const menuRef = useClickOutside(() => toggleMenu(""));

  return (
    <div className={styles["menu-container"]} ref={menuRef}>
      <MenuIcon onClick={() => toggleMenu("main")} />

      {openMenu === "main" && (
        <div className={styles["menu"]}>
          {menuData.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
