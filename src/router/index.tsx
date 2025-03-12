import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/home";
import DrawingLayout from "@/layouts/DrawingLayout/DrawingLayout";

const ROUTER_PATH = {
  home: "/",
  board: "/board",
  login: "/log-in",
  signup: "/sign-up",
};

export const router = createBrowserRouter([
  {
    element: <DrawingLayout />,
    children: [
      {
        path: ROUTER_PATH.home,
        element: <Home />,
      },
    ],
  },
]);
