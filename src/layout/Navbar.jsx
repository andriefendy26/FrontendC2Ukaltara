import { GiHamburgerMenu } from "react-icons/gi";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Logo from "../../public/logo.png"


const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div
      className="py-6 px-12 lg:py-3 md:px-12 shadow-xl font-poppins border-b lg:flex lg:px-32 xl:px-40 lg:justify-between lg:items-center sticky top-0 z-50 w-full bg-white "
      data-aos="fade-down"
    >
      <div className="flex justify-between">
        <h1 className="font-bold flex text-xl lg:text-2xl xl:text-4xl">
          <p className="text-primary">C2U</p>Kaltara
        </h1>
        <img className="w-[40%] my-5" src={Logo}></img>
        <button className="lg:hidden" onClick={() => SetIsOpen(!isOpen)}>
          {isOpen ? (
            <BsX size={30} />
          ) : (
            <GiHamburgerMenu size={30}></GiHamburgerMenu>
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "mt-5" : "hidden"
        } lg:flex lg:justify-between lg:items-center lg:gap-12 transition-all duration-200`}
      >
        <ul className={`lg:flex lg:items-center lg:gap-3`}>
          <li className="my-2 hover:bg-gray-200 p-1 px-2 rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="my-2 hover:bg-gray-200 p-1 px-2 rounded-xl">
            <Link to="logbook">Logbook</Link>
          </li>
          <li className="my-2 hover:bg-gray-200 p-1 px-2 rounded-xl">
            <Link to="aboutus">About Us</Link>
          </li>
        </ul>
        <Link to="/login">
          <Button size="sm">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
