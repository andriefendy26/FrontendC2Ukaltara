import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/public/Home";
import Navbar from "./layout/Navbar";
import DetailAbout from "./pages/public/DetailAboutus";
import Pendampinganpesisir from "./pages/public/PengabdianPesisir";
import LestariMangrove from "./pages/public/LestariMangrove";
import PengabdianPesisir from "./pages/public/PengabdianPesisir";
import SosialisasiPesisir from "./pages/public/SosialisasiPesisir";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <DetailAbout />,
  },
  {
    path: "/pendampinganpesisir",
    element: <Pendampinganpesisir />,
  },
  {
    path: "/lestarimangrove",
    element: <LestariMangrove />,
  },
  {
    path: "/pengabdianpesisir",
    element: <PengabdianPesisir />,
  },
  {
    path: "/sosialisasipesisir",
    element: <SosialisasiPesisir />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
