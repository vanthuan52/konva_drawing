import React from "react";
import { Stage } from "react-konva";
import "./KonvaBoard.scss";
import { RootState, useAppSelector } from "@/redux/store";
import { useKonvaStage } from "@/modules/canvas/hooks/useKonvaStage";
import { useCanvasLayout } from "@/modules/canvas/contexts/CanvasLayoutContext";
import ShapeLayer from "@/modules/canvas/components/ShapeLayer/ShapeLayer";
import { useCanvasTools } from "@/modules/canvas/hooks/useCanvasTools";

const KonvaBoard: React.FC = () => {
  const activeTool = useAppSelector(
    (state: RootState) => state.canvas.activeTool
  );

  const { stageRef } = useKonvaStage({});
  const { boardWidth, boardHeight } = useCanvasLayout();

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
        className="board-canvas"
        ref={stageRef}
        width={boardWidth}
        height={boardHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* <ShapeLayer
          lines={lines}
          rectangles={rectangles}
          circles={circles}
          ellipses={ellipses}
        /> */}
        <ShapeLayer entities={[]} />
      </Stage>
    </div>
  );
};

export default KonvaBoard;
