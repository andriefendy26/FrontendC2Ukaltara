import React from "react";
import {
  SideBarItem,
  SidebarHead,
  LogoutComp,
} from "../../layout/layoutDashboard/SidebarComp";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout, reset } from "../../features/AuthSlice";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

import { createContext, useContext } from "react";
// const SideContext = createContext();

const Sidebar = ({ setOpenDel, datauser }) => {
  // const { isOpen } = useContext(SideContext);
  return (
    <SidebarHead datauser={datauser}>
      <SideBarItem
        nama="Dashboard"
        to="/dashboard"
        icon={<MdOutlineSpaceDashboard size={20}></MdOutlineSpaceDashboard>}
      />
      <SideBarItem
        nama="Users"
        to="/users"
        icon={<IoPersonOutline size={20}></IoPersonOutline>}
      />
      <SideBarItem
        nama="InputData"
        to="/datasampah"
        icon={<FaDatabase size={20}></FaDatabase>}
      />
      <SideBarItem
        nama="UploadBerita"
        to="/berita"
        icon={<FaRegNewspaper size={20}></FaRegNewspaper>}
      />
      <SideBarItem
        nama="Logbook"
        to="/Logbbokdash"
        icon={<FaBookOpen size={20}></FaBookOpen>}
      />
      {/* <SideBarItem
        nama="Setting"
        to="/setting"
        icon={<IoMdSettings size={20}></IoMdSettings>}
      />
      <SideBarItem
        nama="Help"
        to="/help"
        icon={<MdOutlineLiveHelp size={20}></MdOutlineLiveHelp>}
      /> */}
      {/* <Button
        onClick={() => setOpenDel((curr) => !curr)}
        className={`flex p-3 items-center rounded-lg my-1 hover:bg-gray-300 hover:text-black `}
      >
        <MdExitToApp size={20}></MdExitToApp>
        <span
          className={`overflow-hidden transition-all  ${
            isOpen ? "w-52 ml-3" : "w-0"
          }`}
        >
          Logout
        </span>
      </Button> */}
      <LogoutComp onClick={() => setOpenDel((curr) => !curr)}></LogoutComp>
      {/* <SideBarItem
        nama="Logout"
        // to="/help"
        onClick={() => setOpenDel((curr) => !curr)}
        icon={<MdExitToApp size={20}></MdExitToApp>}
      /> */}
    </SidebarHead>
  );
};

export default Sidebar;
