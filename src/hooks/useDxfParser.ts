import { useCallback, useState } from "react";
import { parseDxf } from "@/utils/dxfUtils";

const useDxfParser = () => {
  const [layers, setLayers] = useState<Record<string, any[]>>({});

  const loadDxfFile = useCallback(async (file: File) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      if (!event.target?.result) return;

      const dxfContent = event.target.result.toString();
      const parsedLayers = parseDxf(dxfContent);
      setLayers(parsedLayers);
    };

    reader.readAsText(file);
  }, []);

  return { layers, loadDxfFile };
};

export default useDxfParser;
