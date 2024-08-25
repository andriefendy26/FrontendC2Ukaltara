import React from "react";
import {
  SideBarItem,
  SidebarHead,
} from "../../layout/layoutDashboard/SidebarComp";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <SidebarHead>
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
        nama="UploadBerita"
        to="/berita"
        icon={<FaRegNewspaper size={20}></FaRegNewspaper>}
      />
      <SideBarItem
        nama="InputData"
        to="/datasampah"
        icon={<FaDatabase size={20}></FaDatabase>}
      />
      <SideBarItem
        nama="Setting"
        to="/setting"
        icon={<IoMdSettings size={20}></IoMdSettings>}
      />
      <SideBarItem
        nama="Help"
        to="/help"
        icon={<MdOutlineLiveHelp size={20}></MdOutlineLiveHelp>}
      />
    </SidebarHead>
  );
};

export default Sidebar;
