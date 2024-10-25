import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../public/logo.png";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, PowerIcon, UserCircleIcon } from "lucide-react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const NavbarDaisy = ({ user, logout }) => {
  useEffect(() => {
    console.log("from namvar", user);
  }, [user]);
  return (
    <div className="navbar  lg:px-32 xl:px-52 bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="logbook">Logbook</Link>
            </li>
            <li>
              <Link to="aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <img className="w-14 object-center" src={Logo}></img>
        <div className="navbar-end">

        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="medium"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="/" className="flex items-center">
              Home
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="medium"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="logbook" className="flex items-center">
              Logbook
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="medium"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="aboutus" className="flex items-center">
              aboutus
            </Link>
          </Typography>
        </ul>
        {/* <ul className="menu menu-horizontal text-lg px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="logbook">Logbook</Link>
          </li>
          <li>
            <Link to="aboutus">About Us</Link>
          </li>
        </ul> */}
      </div>
      <div className="navbar-end gap-2">
        {user && user !== null ? (
          <ProfileMenu nama={user.nama} logout={logout} gambar={user.url}>
          </ProfileMenu>
        ) : (
          <div className="flex items-center gap-x-1">
            <Link to={"/login"}>
              <Button
                variant="outlined"
                size="sm"
                className=" lg:inline-block"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="gradient"
                size="sm"
                className="lg:inline-block"
              >
                <span>Register</span>
              </Button>
            </Link>
          </div>
            //   <Link
            //     to="/login"
            //     className="btn btn-active btn-neutral btn-sm lg:btn-md"
            //   >
            //     Login
            //   </Link>
            //   <Link
            //     to="/register"
            //     className="btn btn-outline btn-neutral btn-sm lg:btn-md"
            //   >
            //     Register
            //   </Link>
            


        )}
      </div>
    </div>
  );
};

function ProfileMenu({ nama, logout, gambar }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // profile menu component
  const navigate = useNavigate();
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      action: () => navigate("/profile"),
    },
    {
      label: "Dashboard",
      icon: MdOutlineSpaceDashboard,
      action: () => navigate("/dashboard"),
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      action: logout,
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {gambar == null ? (
            <span className="rounded-full border-white bg-primary text-white border p-3">
              {nama.split(" ")[0].charAt(0).toUpperCase()}
            </span>
          ) : (
            <Avatar
              variant="circular"
              size="sm"
              alt={nama.split(" ")[0].charAt(0).toUpperCase()}
              className="border border-gray-900 p-0.5"
              src={gambar}
            />
          )}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
          {nama}
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, action }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={action}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default NavbarDaisy;
