import { Outlet } from "react-router-dom";
// import Sidebar from "../../layout/layoutDashboard/SidebarComp";
import Sidebar from "./Sidebar";
import AOS from "aos";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OnLogin } from "../../features/AuthSlice";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(OnLogin());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <div className="flex bg-white">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
