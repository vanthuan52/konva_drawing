import React from "react";
import { Layer, Line, Stage } from "react-konva";
import "./KonvaBoard.scss";
import { RootState, useAppSelector } from "@/redux/store";
import { useKonvaStage } from "@/hooks/useKonvaStage";
import { useFreeDrawing } from "@/hooks/useFreeDrawing";
import { useBoardLayout } from "@/hooks/useBoardLayout";

const KonvaBoard: React.FC = () => {
  const activeTool = useAppSelector(
    (state: RootState) => state.canvas.activeTool
  );

  const { stageRef } = useKonvaStage({});
  const { boardWidth, boardHeight } = useBoardLayout();

  const { lines, handleMouseDown, handleMouseMove, handleMouseUp } =
    useFreeDrawing({ activeTool });

  return (
    <div className="board">
      <Stage
        ref={stageRef}
        width={boardWidth}
        height={boardHeight}
        style={{ border: "1px solid red" }}
        onMouseDown={(e) => {
          handleMouseDown(e);
        }}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
        onMouseUp={(e) => {
          handleMouseUp();
        }}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line key={i} {...line} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default KonvaBoard;
