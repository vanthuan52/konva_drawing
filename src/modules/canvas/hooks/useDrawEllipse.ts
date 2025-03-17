import { useState, useRef, useCallback } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { ApplicationTool } from "@/modules/canvas/types";
import { Coordinate } from "@/modules/canvas/types";

interface UseDrawEllipseProps {
  activeTool: ApplicationTool;
}

export const useDrawEllipse = ({ activeTool }: UseDrawEllipseProps) => {
  const [ellipses, setEllipses] = useState<EllipseConfig[]>([]);
  const isDrawing = useRef(false);
  const startPoint = useRef<Coordinate | null>(null);

  const handleMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (activeTool !== "ellipse") return;

      const { x, y } = e.target.getStage()!.getPointerPosition()!;
      startPoint.current = { x, y };
      isDrawing.current = true;

      setEllipses((prevEllipses) => [
        ...prevEllipses,
        { x, y, radiusX: 0, radiusY: 0, stroke: "#000000" },
      ]);
    },
    [activeTool]
  );

  const handleMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (!isDrawing.current || activeTool !== "ellipse" || !startPoint.current)
        return;

      const { x, y } = e.target.getStage()!.getPointerPosition()!;
      const { x: startX, y: startY } = startPoint.current;

      const radiusX = Math.abs(x - startX) / 2;
      const radiusY = Math.abs(y - startY) / 2;
      const centerX = (x + startX) / 2;
      const centerY = (y + startY) / 2;

      setEllipses((prevEllipses) => {
        if (prevEllipses.length === 0) return prevEllipses;
        const newEllipses = [...prevEllipses];
        newEllipses[newEllipses.length - 1] = {
          ...newEllipses[newEllipses.length - 1],
          x: centerX,
          y: centerY,
          radiusX,
          radiusY,
        };

        return newEllipses;
      });
    },
    [activeTool]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
  }, []);

  return { ellipses, handleMouseDown, handleMouseMove, handleMouseUp };
};
