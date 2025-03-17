import { useState, useCallback, useRef } from "react";
import { RectConfig } from "konva/lib/shapes/Rect";
import { KonvaEventObject } from "konva/lib/Node";
import { ApplicationTool } from "@/modules/canvas/types";
import { Coordinate } from "@/modules/canvas/types";

interface UseDrawRectProps {
  activeTool: ApplicationTool;
}

const BASE_RECTANGLE_PROPERTIES = {
  stroke: "#000000",
  strokeWidth: 2,
};

export const useDrawRect = ({ activeTool }: UseDrawRectProps) => {
  const [rectangles, setRectangles] = useState<RectConfig[]>([]);
  const isDrawing = useRef(false);
  const startPoint = useRef<Coordinate | null>(null);

  const handleMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (activeTool !== "rect") return;
      isDrawing.current = true;

      const { x, y } = e.target.getStage()!.getPointerPosition()!;
      startPoint.current = { x, y };

      setRectangles((prev) => [
        ...prev,
        { ...BASE_RECTANGLE_PROPERTIES, x, y, width: 0, height: 0 },
      ]);
    },
    [activeTool]
  );

  const handleMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (!isDrawing.current || activeTool !== "rect" || !startPoint.current)
        return;

      const { x, y } = e.target.getStage()!.getPointerPosition()!;
      const { x: startX, y: startY } = startPoint.current;

      const newWidth = x - startX;
      const newHeight = y - startY;

      setRectangles((prev) => {
        const updatedRects = [...prev];
        updatedRects[updatedRects.length - 1] = {
          ...updatedRects[updatedRects.length - 1],
          x: newWidth < 0 ? x : startX,
          y: newHeight < 0 ? y : startY,
          width: Math.abs(newWidth),
          height: Math.abs(newHeight),
        };

        return updatedRects;
      });
    },
    [activeTool]
  );

  const handleMouseUp = useCallback(() => {
    if (activeTool !== "rect") return;

    isDrawing.current = false;
    startPoint.current = null;
  }, [activeTool]);

  return { rectangles, handleMouseDown, handleMouseMove, handleMouseUp };
};
