import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footers from "../layout/Footer";
import { useEffect } from "react";
import aos from "aos";

function Layout() {
  useEffect(() => {
    aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footers></Footers>
    </div>
  );
}

export default Layout;
