import "./Sidebar.scss";
import { ApplicationTool } from "@/types/application";
import { useAppDispatch } from "@/redux/store";
import { canvasActions } from "@/redux/features/canvas/canvas.slice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const setActiveTool = (activeTool: ApplicationTool) => {
    dispatch(canvasActions.setActiveTool(activeTool));
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Tools</h2>
      <button
        className="sidebar-button"
        onClick={() => setActiveTool("pencil")}
      >
        Free drawing
      </button>
      <button className="sidebar-button" onClick={() => setActiveTool("line")}>
        Draw Line
      </button>
      <button className="sidebar-button" onClick={() => setActiveTool("rect")}>
        Draw Rect
      </button>
      <button
        className="sidebar-button"
        onClick={() => setActiveTool("eraser")}
      >
        Eraser
      </button>
    </div>
  );
};

export default Sidebar;
