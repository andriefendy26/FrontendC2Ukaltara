import { Outlet } from "react-router-dom";
// import Sidebar from "../../layout/layoutDashboard/SidebarComp";
import Sidebar from "./Sidebar";
import AOS from "aos";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex bg-white">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
