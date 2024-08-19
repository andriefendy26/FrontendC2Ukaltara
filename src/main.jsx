import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//halaman untuk pengunjung
import Home from "./pages/public/Home";
import DetailAbout from "./pages/public/DetailAboutus";
import Pendampinganpesisir from "./pages/public/PengabdianPesisir";
import LestariMangrove from "./pages/public/LestariMangrove";
import PengabdianPesisir from "./pages/public/PengabdianPesisir";
import SosialisasiPesisir from "./pages/public/SosialisasiPesisir";
import Layout from "./pages/Layout";

//halaman untuk admin
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
