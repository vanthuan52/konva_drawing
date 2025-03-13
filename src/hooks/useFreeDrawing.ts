import { useCallback, useState } from "react";
import { LineConfig } from "konva/lib/shapes/Line";
import { ApplicationTool } from "@/types/application";

interface UseFreeDrawing {
  activeTool: ApplicationTool;
}

const allowedActions: ApplicationTool[] = ["pencil", "eraser"];

export const useFreeDrawing = ({ activeTool }: UseFreeDrawing) => {
  const [lines, setLines] = useState<LineConfig[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = useCallback(
    (e: any) => {
      if (!allowedActions.includes(activeTool)) return;
      setIsDrawing(true);

      const { x, y } = e.target.getStage().getPointerPosition();
      setLines((prev) => [
        ...prev,
        {
          tool: activeTool,
          points: [x, y],
          stroke: "black",
          strokeWidth: activeTool === "pencil" ? 2 : 10,
          tension: 0.5,
          globalCompositeOperation:
            activeTool === "eraser" ? "destination-out" : "source-over",
        },
      ]);
    },
    [activeTool]
  );

  const handleMouseMove = useCallback(
    (e: any) => {
      if (!allowedActions.includes(activeTool) || !isDrawing) return;
      const { x, y } = e.target.getStage().getPointerPosition();

      setLines((prevLines) => {
        if (prevLines.length === 0) return prevLines;

        const lastLine = { ...prevLines[prevLines.length - 1] };

        if (!lastLine || !Array.isArray(lastLine.points)) {
          return prevLines;
        }

        lastLine.points = [...lastLine.points, x, y];

        return [...prevLines.slice(0, -1), lastLine];
      });
    },
    [activeTool, isDrawing]
  );

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false);
  }, []);

  return { lines, handleMouseMove, handleMouseDown, handleMouseUp };
};
