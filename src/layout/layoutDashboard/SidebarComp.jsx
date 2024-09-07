import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

import { createContext, useContext } from "react";
import { Button } from "@material-tailwind/react";
import { MdExitToApp } from "react-icons/md";
const SideContext = createContext();

const SidebarHead = ({ children , datauser}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <aside className={`flex flex-col h-screen border shadow-2xl`}>
      <div className={`flex flex-col h-full p-3`}>
        <div
          className={`flex items-center mb-5 ${
            isOpen ? "justify-between px-2" : "justify-center"
          }`}
        >
          <span
            className={`overflow-hidden font-bold flex text-xl xl:text-2xl transition-all ${
              isOpen ? "w-52" : "w-0"
            }`}
          >
            <span className=" text-primary">C2U</span>Kaltara
          </span>
          <button
            onClick={() => setOpen((isOpen) => !isOpen)}
            className="rounded-lg p-2"
          >
            {isOpen ? (
              <BsX size={30} color="black"></BsX>
            ) : (
              <CiMenuFries size={30} color="black"></CiMenuFries>
            )}
          </button>
        </div>
        <SideContext.Provider value={{ isOpen }}>
          <div className="flex-1">{children}</div>
        </SideContext.Provider>
      </div>
      <div className={`flex items-center border-t border-gray-300 p-3`}>
        <span className="rounded-lg border-white bg-primary text-white border p-3">
          {datauser && datauser.nama.split(" ")[0].charAt(0).toUpperCase()}
        </span>
        <span
          className={`overflow-hidden transition-all ${
            isOpen ? "w-52 ml-3" : "w-0"
          }`}
        >
          <p className={`font-bold`}>{datauser ? datauser.nama : ''}</p>
          <p className="">{datauser ? datauser.email : ''}</p>
        </span>
      </div>
    </aside>
  );
};

const SideBarItem = ({ nama, icon, to, onClick }) => {
  const { isOpen } = useContext(SideContext);

  return (
    <NavLink
      to={to ? to : null}
      onClick={onClick}
      className={({ isActive, isPending }) =>
        `flex p-3 items-center rounded-lg my-1 hover:bg-gray-300 hover:text-black ${
          isPending ? "" : isActive ? "bg-primary text-white" : ""
        }`
      }
    >
      {icon}
      <span
        className={`overflow-hidden transition-all  ${
          isOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        {nama}
      </span>
    </NavLink>
  );
};

const LogoutComp = ({onClick}) => {
  const { isOpen } = useContext(SideContext);
  return (
    <Button
      onClick={onClick}
      className={`flex p-3 items-center rounded-lg my-1 hover:bg-gray-300 hover:text-black `}
    >
      <MdExitToApp size={20}></MdExitToApp>
      <p
        className={`overflow-hidden text-left transition-all  ${
          isOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        Logout
      </p>
    </Button>
  );
};

export { SideBarItem, SidebarHead , LogoutComp};

// export default Sidebar;
