import { Outlet } from "react-router-dom";
// import Sidebar from "../../layout/layoutDashboard/SidebarComp";
import Sidebar from "./Sidebar";
import AOS from "aos";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OnLogin, Logout, reset } from "../../features/AuthSlice";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(OnLogin());
    console.log(user)
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const [openDel, setOpenDel] = useState(false);

  // const handleOpenDelete = () => setOpenDel((curr) => !curr);
  
  const LogoutAct = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="flex bg-white">
      {/* Delete Modal */}
      <Dialog open={openDel} handler={() => setOpenDel((curr) => !curr)}>
        <DialogHeader>Apakah Anda yakin ingin Logout?</DialogHeader>
        {/* <DialogBody>
          Tindakan ini tidak dapat dibatalkan, dan Anda akan kehilangan semua
          data terkait. Jika Anda yakin dengan keputusan Anda dan siap untuk
          melanjutkan, mohon konfirmasi. Kami siap membantu jika Anda memiliki
          pertanyaan atau membutuhkan bantuan lebih lanjut.
        </DialogBody> */}
        <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={() => setOpenDel((curr) => !curr)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={() => LogoutAct()}>
            <span>Logout</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Sidebar setOpenDel={setOpenDel} datauser={user} />
      
      <Outlet />
    </div>
  );
}

export default Layout;
