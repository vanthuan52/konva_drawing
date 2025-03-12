import React, { useState, useRef, useEffect } from "react";
import "./KonvaCanvas.scss";
import { RootState, useAppSelector } from "@/redux/store";

const LoadingDiv = () => (
  <div className="w-full min-h-screen relative">Loading...</div>
);

const KonvaCanvas: React.FC = () => {
  return <div className="w-full h-full relative" />;
};

export default KonvaCanvas;
