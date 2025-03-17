import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationTool } from "./types";

interface CanvasState {
  activeTool: ApplicationTool;
}

const initialState: CanvasState = {
  activeTool: "select",
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setActiveTool: (state, action: PayloadAction<ApplicationTool>) => {
      state.activeTool = action.payload;
    },
    resetActiveTool: (state) => {
      state.activeTool = "select";
    },
  },
});

export const canvasActions = canvasSlice.actions;
export default canvasSlice.reducer;
