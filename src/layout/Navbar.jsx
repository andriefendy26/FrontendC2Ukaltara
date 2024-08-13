import { GiHamburgerMenu } from "react-icons/gi";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-tailwind/react";


const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className=" p-6 font-poppins">
      <div className="flex justify-between">
        <h1 className="font-bold flex text-3xl">
          <p className="text-primary">C2U</p>Kaltara
        </h1>
        <button className="" onClick={() => SetIsOpen(!isOpen)}>
          {isOpen ? (
            <BsX size={30} />
          ) : (
            <GiHamburgerMenu size={30}></GiHamburgerMenu>
          )}
        </button>
      </div>
      <ul className={isOpen ? "mt-5" : "hidden"}>
        <li className="my-2 hover:bg-gray-200 p-1 px-2 rounded-xl">
          <Link>Home</Link>
        </li>
        <li className="my-2 hover:bg-gray-200 p-1 px-2 rounded-xl">
          <Link>Rekapitulasi</Link>
        </li>
        <li className="my-2 hover:bg-gray-200 p-1 px-2 rounded-xl">
          <Link>About Us</Link>
        </li>
        <li>
          <Button size="sm">Login</Button>

        </li>
      </ul>
    </div>
  );
};

export default Navbar;
