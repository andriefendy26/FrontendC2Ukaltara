import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footers from "../layout/Footer";
import { useEffect } from "react";
import aos from "aos";
import NavbarDaisy from "../layout/NavbarDaisy";
import { useDispatch, useSelector } from "react-redux";
import { Logout, OnLogin, reset } from "../features/AuthSlice";
import Swal from "sweetalert2";

function Layout() {
  const {user } = useSelector((state) => state.auth);
  useEffect(() => {
    aos.init({
      duration: 2000,
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(OnLogin());
    console.log(user);
  }, [dispatch]);

  const LogoutAct = () => {
    Swal.fire({
      title: "Logout ?",
      text: "Apa anda yakin ingin Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(Logout());
        dispatch(reset());
        navigate("/");
        Swal.fire({
          title: "Logout!",
          text: "Kamu berhasil logout.",
          icon: "success"
        });
      }
    });
   
  };
  
  return (
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      <NavbarDaisy user={user} logout={LogoutAct}></NavbarDaisy>
      <main>
        <Outlet />
      </main>
      <Footers></Footers>
    </div>
  );
}

export default Layout;
