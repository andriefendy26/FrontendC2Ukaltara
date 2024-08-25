import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

import { createContext, useContext } from "react";
const SideContext = createContext();

const SidebarHead = ({ children }) => {
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
            className={`overflow-hidden font-bold flex text-2xl xl:text-4xl transition-all ${
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
        <span className="rounded-2xl border-white bg-primary text-white border p-3">
          AE
        </span>
        <span
          className={`overflow-hidden transition-all ${
            isOpen ? "w-52 ml-3" : "w-0"
          }`}
        >
          <p className={`font-bold`}>Andri Efendy</p>
          <p className="">johndoe@gmail.com</p>
        </span>
      </div>
    </aside>
  );
};

const SideBarItem = ({ nama, icon, to }) => {
  const { isOpen } = useContext(SideContext);

  return (
    <NavLink
      to={to}
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

export { SideBarItem, SidebarHead };

// export default Sidebar;
