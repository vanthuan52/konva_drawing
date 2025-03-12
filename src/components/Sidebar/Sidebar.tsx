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
    <div className="w-1/6 bg-gray-800 text-white p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Tools</h2>
      <button
        className="p-2 bg-gray-700 rounded cursor-pointer"
        onClick={() => setActiveTool("line")}
      >
        Draw Line
      </button>
      <button
        className="p-2 bg-gray-700 rounded cursor-pointer"
        onClick={() => setActiveTool("rect")}
      >
        Draw Rect
      </button>
    </div>
  );
};

export default Sidebar;
