import React, { createContext, useEffect, useState } from "react";

interface BoardLayoutContextProps {
  sidebarWidth: number;
  propertiesWidth: number;
  boardWidth: number;
  boardHeight: number;
}

export const BoardLayoutContext = createContext<
  BoardLayoutContextProps | undefined
>(undefined);

export const BoardLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarWidth] = useState(250);
  const [propertiesWidth] = useState(250);
  const [boardWidth, setBoardWidth] = useState(
    window.innerWidth - (sidebarWidth + propertiesWidth)
  );
  const [boardHeight] = useState(window.innerHeight - 2);

  useEffect(() => {
    const updateBoardWidth = () => {
      setBoardWidth(window.innerWidth - (sidebarWidth + propertiesWidth));
    }; // minus sidebar width & properties width

    window.addEventListener("resize", updateBoardWidth);
    return () => window.removeEventListener("resize", updateBoardWidth);
  }, [sidebarWidth, propertiesWidth]);

  return (
    <BoardLayoutContext.Provider
      value={{ sidebarWidth, propertiesWidth, boardWidth, boardHeight }}
    >
      {children}
    </BoardLayoutContext.Provider>
  );
};
