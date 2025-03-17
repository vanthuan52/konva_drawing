import DxfParser from "dxf-parser";

export const parseDxf = (dxfContent: string) => {
  const parser = new DxfParser();
  const dxf = parser.parseSync(dxfContent);

  const layers: Record<string, any[]> = {};

  dxf?.entities.forEach((entity) => {
    if (!layers[entity.layer]) {
      layers[entity.layer] = [];
    }

    layers[entity.layer].push(entity);
  });

  return layers;
};
