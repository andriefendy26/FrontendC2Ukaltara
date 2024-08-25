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
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardView from "./pages/dashboard/DashboarView";
import UserView from "./pages/dashboard/UserView";
import BeritaView from "./pages/dashboard/BeritaView";
import DataView from "./pages/dashboard/DataView";
import SettingView from "./pages/dashboard/SettingView";
import HelpView from "./pages/dashboard/HelpView";

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
        path: "aboutus",
        element: <DetailAbout />,
      },
      {
        path: "pendampinganpesisir",
        element: <Pendampinganpesisir />,
      },
      {
        path: "lestarimangrove",
        element: <LestariMangrove />,
      },
      {
        path: "pengabdianpesisir",
        element: <PengabdianPesisir />,
      },
      {
        path: "sosialisasipesisir",
        element: <SosialisasiPesisir />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: <DashboardView />,
      },
      {
        path: "users",
        element: <UserView />,
      },
      {
        path: "berita",
        element: <p>Ini Berita Managemen</p>,
      },
      {
        path: "datasampah",
        element: <p>Ini Berita Managemen</p>,
      },
      {
        path: "setting",
        element: <p>Ini Berita Managemen</p>,
      },
      {
        path: "help",
        element: <p>Ini Berita Managemen</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
