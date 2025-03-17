import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <RouterProvider router={router}></RouterProvider>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
