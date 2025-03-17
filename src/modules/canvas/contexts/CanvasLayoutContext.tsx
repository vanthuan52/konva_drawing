import React, { createContext, useContext, useEffect, useState } from "react";

interface CanvasLayoutContextProps {
  sidebarWidth: number;
  boardWidth: number;
  boardHeight: number;
}

const CanvasLayoutContext = createContext<CanvasLayoutContextProps | undefined>(
  undefined
);

export const CanvasLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarWidth] = useState(250);
  const [boardWidth, setBoardWidth] = useState(
    window.innerWidth - sidebarWidth
  );
  const [boardHeight] = useState(window.innerHeight - 2);

  useEffect(() => {
    const updateBoardWidth = () => {
      setBoardWidth(window.innerWidth - sidebarWidth);
    }; // minus sidebar width

    window.addEventListener("resize", updateBoardWidth);
    return () => window.removeEventListener("resize", updateBoardWidth);
  }, [sidebarWidth]);

  return (
    <CanvasLayoutContext.Provider
      value={{ sidebarWidth, boardWidth, boardHeight }}
    >
      {children}
    </CanvasLayoutContext.Provider>
  );
};

export const useCanvasLayout = () => {
  const context = useContext(CanvasLayoutContext);
  if (!context) {
    throw new Error(
      "useCanvasLayout must be used within a CanvasLayoutProvider"
    );
  }
  return context;
};
