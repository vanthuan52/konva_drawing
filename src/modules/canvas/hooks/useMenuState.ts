import { useState } from "react";

export const useMenuState = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return { openMenu, toggleMenu };
};
