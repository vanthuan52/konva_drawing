import { useContext } from "react";
import { BoardLayoutContext } from "@/contexts/BoardLayoutContext";

export const useBoardLayout = () => {
  const context = useContext(BoardLayoutContext);
  if (!context) {
    throw new Error("useBoardLayout must be used within a BoardLayoutProvider");
  }
  return context;
};
