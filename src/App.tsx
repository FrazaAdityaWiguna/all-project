import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AutoScroll from "./pages/Auto-scroll";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auto-scroll",
    element: <AutoScroll />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
