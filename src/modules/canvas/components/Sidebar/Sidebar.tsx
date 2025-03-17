import "./Sidebar.scss";
import { ApplicationTool } from "@/types/tool";
import { useAppDispatch } from "@/redux/store";
import { canvasActions } from "@/modules/canvas/canvasSlice";

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
        onClick={() => setActiveTool("circle")}
      >
        Draw Circle
      </button>
      <button
        className="sidebar-button"
        onClick={() => setActiveTool("ellipse")}
      >
        Draw Ellipse
      </button>
      <button
        className="sidebar-button"
        onClick={() => setActiveTool("eraser")}
      >
        Eraser
      </button>
      <button
        className="sidebar-button"
        onClick={() => setActiveTool("select")}
      >
        Select
      </button>
    </div>
  );
};

export default Sidebar;
