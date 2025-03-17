import { createBrowserRouter } from "react-router-dom";
import BoardPage from "@/modules/canvas/pages/BoardPage/BoardPage";
import NotFound from "@/pages/NotFound/NotFound";
import HomePage from "@/pages/HomePage/HomePage";

const ROUTER_PATH = {
  home: "/",
  board: "/board",
  login: "/log-in",
  signup: "/sign-up",
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.home,
    element: <HomePage />,
  },
  {
    path: ROUTER_PATH.board,
    element: <BoardPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
