import React from "react";
import { Stage } from "react-konva";
import "./KonvaBoard.scss";
import { RootState, useAppSelector } from "@/redux/store";
import { useKonvaStage } from "@/hooks/useKonvaStage";
import { useBoardLayout } from "@/contexts/BoardLayoutContext";
import ShapeLayer from "@/components/ShapeLayer/ShapeLayer";
import { useCanvasTools } from "@/hooks/useCanvasTools";

const KonvaBoard: React.FC = () => {
  const activeTool = useAppSelector(
    (state: RootState) => state.canvas.activeTool
  );

  const { stageRef } = useKonvaStage({});
  const { boardWidth, boardHeight } = useBoardLayout();

  const {
    lines,
    rectangles,
    circles,
    ellipses,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useCanvasTools({ activeTool });

  return (
    <div className="board">
      <Stage
        ref={stageRef}
        width={boardWidth}
        height={boardHeight}
        style={{ border: "1px solid red" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <ShapeLayer
          lines={lines}
          rectangles={rectangles}
          circles={circles}
          ellipses={ellipses}
        />
      </Stage>
    </div>
  );
};

export default KonvaBoard;
