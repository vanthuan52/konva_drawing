import { useState, useRef, useCallback, useEffect } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import Konva from "konva";
import { ApplicationTool } from "@/modules/canvas/types";

interface UseSelectObjectProps {
  activeTool: ApplicationTool;
}

export const useSelectObject = ({ activeTool }: UseSelectObjectProps) => {
  const [selectedNode, setSelectedNode] = useState<Konva.Node | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);

  const handleSelect = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (activeTool !== "select") return;

      const shape = e.target;

      if (!shape || shape.getStage() === shape) return;

      setSelectedNode(shape);
    },
    [activeTool]
  );

  const handleDeselect = useCallback(() => {
    setSelectedNode(null);
  }, []);

  useEffect(() => {
    if (selectedNode && transformerRef.current) {
      transformerRef.current.nodes([selectedNode]);
      transformerRef.current.getLayer()?.batchDraw();
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [selectedNode]);

  return { selectedNode, transformerRef, handleSelect, handleDeselect };
};
