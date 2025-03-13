import React from "react";
import { Layer, Line, Rect, Circle, Ellipse, Transformer } from "react-konva";
import { useSelectObject } from "@/hooks/useSelectObject";
import { RootState, useAppSelector } from "@/redux/store";
import { LineConfig } from "konva/lib/shapes/Line";
import { RectConfig } from "konva/lib/shapes/Rect";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";

interface ShapeLayerProps {
  lines: LineConfig[];
  rectangles: RectConfig[];
  circles: CircleConfig[];
  ellipses: EllipseConfig[];
}

const ShapeLayer: React.FC<ShapeLayerProps> = ({
  lines,
  rectangles,
  circles,
  ellipses,
}) => {
  const activeTool = useAppSelector(
    (root: RootState) => root.canvas.activeTool
  );
  const { selectedNode, transformerRef, handleSelect } = useSelectObject({
    activeTool,
  });

  return (
    <Layer>
      {lines.map((line: any, i: any) => (
        <Line key={`line-${i}`} {...line} />
      ))}
      {rectangles.map((rect: any, i: any) => (
        <Rect key={`rect-${i}`} {...rect} onClick={handleSelect} />
      ))}
      {circles.map((circle: any, i: any) => (
        <Circle key={`circle-${i}`} {...circle} onClick={handleSelect} />
      ))}
      {ellipses.map((ellipse: any, i: any) => (
        <Ellipse key={`ellipse-${i}`} {...ellipse} onClick={handleSelect} />
      ))}

      {selectedNode && <Transformer ref={transformerRef} />}
    </Layer>
  );
};

export default React.memo(ShapeLayer);
