import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import axios from "axios";
axios.defaults.withCredentials = true;

//halaman untuk pengunjung
import Home from "./pages/public/Home";
import DetailAbout from "./pages/public/DetailAboutus";
import Pendampinganpesisir from "./pages/public/PendampinganPesisir";
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
import Logbook from "./pages/public/LogbookPage/Logbook";
import LogbookDetail from "./pages/public/LogbookPage/LogbookDetail";
import LogbookView from "./pages/dashboard/LogbookView";
import Pemberdayaan from "./pages/public/Pemberdayaan";
import DetailBerita from "./pages/public/DetailBerita";
import NotFound from "./components/Notfound";

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
      {
        path: "pemberdayaanpesisir",
        element: <Pemberdayaan />,
      },
      {
        path: "detail/:id",
        element: <DetailBerita />,
      },
      {
        path: "logbook",
        element: <Logbook />,
      },
      {
        path: "logbook/:id",
        element: <LogbookDetail />,
      },
      {
        path: "*", // Notfound Route
        element: <NotFound />,
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
        element: <BeritaView />,
      },
      {
        path: "Logbbokdash",
        element: <LogbookView />,
      },
      {
        path: "datasampah",
        element: <DataView />,
      },
      {
        path: "setting",
        element: <SettingView />,
      },
      {
        path: "help",
        element: <HelpView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
