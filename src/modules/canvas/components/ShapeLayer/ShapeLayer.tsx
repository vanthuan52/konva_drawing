import React from "react";
import { Layer, Line, Rect, Circle, Ellipse, Transformer } from "react-konva";
import { LineConfig } from "konva/lib/shapes/Line";
import { RectConfig } from "konva/lib/shapes/Rect";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { useSelectObject } from "@/modules/canvas/hooks/useSelectObject";
import { RootState, useAppSelector } from "@/redux/store";

// interface ShapeLayerProps {
//   lines: LineConfig[];
//   rectangles: RectConfig[];
//   circles: CircleConfig[];
//   ellipses: EllipseConfig[];
// }

// const ShapeLayer: React.FC<ShapeLayerProps> = ({
//   lines,
//   rectangles,
//   circles,
//   ellipses,
// }) => {
//   const activeTool = useAppSelector(
//     (root: RootState) => root.canvas.activeTool
//   );
//   const { selectedNode, transformerRef, handleSelect } = useSelectObject({
//     activeTool,
//   });

//   return (
//     <Layer>
//       {lines.map((line: any, i: any) => (
//         <Line key={`line-${i}`} {...line} />
//       ))}
//       {rectangles.map((rect: any, i: any) => (
//         <Rect key={`rect-${i}`} {...rect} onClick={handleSelect} />
//       ))}
//       {circles.map((circle: any, i: any) => (
//         <Circle key={`circle-${i}`} {...circle} onClick={handleSelect} />
//       ))}
//       {ellipses.map((ellipse: any, i: any) => (
//         <Ellipse key={`ellipse-${i}`} {...ellipse} onClick={handleSelect} />
//       ))}

//       {selectedNode && <Transformer ref={transformerRef} />}
//     </Layer>
//   );
// };

interface ShapeLayerProps {
  entities: any[];
}

const ShapeLayer: React.FC<ShapeLayerProps> = ({ entities }) => {
  return (
    <>
      {entities.map((entity, index) => {
        switch (entity.type) {
          case "LINE":
            return (
              <Line
                key={index}
                points={[
                  entity.start.x,
                  entity.start.y,
                  entity.end.x,
                  entity.end.y,
                ]}
                stroke={"#000000"}
              />
            );
          case "CIRCLE":
            return (
              <Circle
                key={index}
                x={entity.center.x}
                y={entity.center.y}
                radius={entity.radius}
                stroke={"#000000"}
              />
            );
          case "LWPOLYLINE":
            return (
              <Line
                key={index}
                points={entity.vertices.flat()}
                closed
                stroke="black"
              />
            );
          case "RECTANGLE":
            return (
              <Rect
                key={index}
                x={entity.x}
                y={entity.y}
                width={entity.width}
                height={entity.height}
                stroke="black"
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default React.memo(ShapeLayer);
