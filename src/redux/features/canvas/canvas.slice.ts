import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationTool } from "@/types/application";

interface CanvasState {
  activeTool: ApplicationTool;
}

const initialState: CanvasState = {
  activeTool: "line",
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setActiveTool: (state, action: PayloadAction<ApplicationTool>) => {
      state.activeTool = action.payload;
    },
    resetActiveTool: (state) => {
      state.activeTool = "line";
    },
  },
});

export const canvasActions = canvasSlice.actions;
export default canvasSlice.reducer;
