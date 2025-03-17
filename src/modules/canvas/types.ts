export interface Coordinate {
  x: number;
  y: number;
}

import { KonvaEventObject } from "konva/lib/Node";

export type ApplicationTool =
  | "select"
  | "line"
  | "pencil"
  | "rect"
  | "circle"
  | "polygon"
  | "ellipse"
  | "eraser";

export type ToolHandler = {
  handleMouseDown?: (e: KonvaEventObject<MouseEvent>) => void;
  handleMouseMove?: (e: KonvaEventObject<MouseEvent>) => void;
  handleMouseUp?: (e: KonvaEventObject<MouseEvent>) => void;
};

export type ToolHandlers = {
  lines?: any[];
  circles?: any[];
  ellipses?: any[];
  rectangles?: any[];
} & ToolHandler;
