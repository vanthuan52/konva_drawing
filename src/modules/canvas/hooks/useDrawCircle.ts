import { useState, useRef, useCallback } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { ApplicationTool } from "@/modules/canvas/types";
import { Coordinate } from "@/modules/canvas/types";

interface UseDrawCircleProps {
  activeTool: ApplicationTool;
}

export const useDrawCircle = ({ activeTool }: UseDrawCircleProps) => {
  const [circles, setCircles] = useState<CircleConfig[]>([]);
  const isDrawing = useRef(false);
  const startPoint = useRef<Coordinate | null>(null);

  const handleMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (activeTool !== "circle") return;
      const { x, y } = e.target.getStage()!.getPointerPosition()!;
      startPoint.current = { x, y };
      isDrawing.current = true;

      setCircles((prevCircles) => [
        ...prevCircles,
        { x, y, radius: 0, stroke: "#000000" },
      ]);
    },
    [activeTool]
  );

  const handleMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (!isDrawing.current || activeTool !== "circle" || !startPoint.current)
        return;

      const { x, y } = e.target.getStage()!.getPointerPosition()!;
      const { x: startX, y: startY } = startPoint.current;

      const radius = Math.sqrt(
        Math.pow(x - startX, 2) + Math.pow(y - startY, 2)
      );

      setCircles((prevCircles) => {
        if (prevCircles.length === 0) return prevCircles;

        const newCircles = [...prevCircles];
        newCircles[newCircles.length - 1] = {
          ...newCircles[newCircles.length - 1],
          radius,
        };
        return newCircles;
      });
    },
    [activeTool]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
  }, []);

  return { circles, handleMouseDown, handleMouseMove, handleMouseUp };
};
