import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/public/Home";
import Navbar from "./layout/Navbar";
import DetailAbout from "./pages/public/DetailAboutus";
import DetailKegiatan from "./pages/public/DetailKegiatan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "/aboutus",
    element : <DetailAbout/>
  },
  {
    path : "/detailkegiatan",
    element : <DetailKegiatan/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
