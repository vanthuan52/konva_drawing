import { useRef } from "react";
import Konva from "konva";

interface UseKonvaStage {}
export const useKonvaStage = ({}: UseKonvaStage) => {
  const stageRef = useRef<Konva.Stage>(null);

  return {
    stageRef,
  };
};
