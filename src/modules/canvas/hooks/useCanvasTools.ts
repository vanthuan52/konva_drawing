import { useMemo, useCallback } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import { useFreeDrawing } from "./useFreeDrawing";
import { useDrawRect } from "./useDrawRect";
import { useDrawCircle } from "./useDrawCircle";
import { useDrawEllipse } from "./useDrawEllipse";
import { useSelectObject } from "./useSelectObject";
import { ApplicationTool, ToolHandler } from "@/modules/canvas/types";

interface UseCanvasToolsProps {
  activeTool: ApplicationTool;
}

export const useCanvasTools = ({ activeTool }: UseCanvasToolsProps) => {
  const { lines, ...freeDraw } = useFreeDrawing({ activeTool });
  const { rectangles, ...drawRect } = useDrawRect({ activeTool });
  const { circles, ...drawCircle } = useDrawCircle({ activeTool });
  const { ellipses, ...drawEllipse } = useDrawEllipse({ activeTool });

  const { handleSelect, handleDeselect } = useSelectObject({ activeTool });

  const currentToolHandlers = useMemo(() => {
    const toolMap: Partial<Record<ApplicationTool, ToolHandler>> = {
      pencil: freeDraw,
      eraser: freeDraw,
      rect: drawRect,
      circle: drawCircle,
      ellipse: drawEllipse,
    };
    return toolMap[activeTool] || {};
  }, [activeTool, freeDraw, drawRect, drawCircle, drawEllipse]);

  const customHandleMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (activeTool === "select") {
        const clickedOnEmpty = e.target === e.target.getStage();
        clickedOnEmpty ? handleDeselect() : handleSelect(e);
      } else {
        currentToolHandlers?.handleMouseDown?.(e);
      }
    },
    [activeTool, handleDeselect, handleSelect, currentToolHandlers]
  );

  return {
    lines,
    rectangles,
    circles,
    ellipses,
    handleMouseDown: customHandleMouseDown,
    handleMouseMove: currentToolHandlers.handleMouseMove,
    handleMouseUp: currentToolHandlers.handleMouseUp,
  };
};
