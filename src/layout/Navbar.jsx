import { GiHamburgerMenu } from "react-icons/gi";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";


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
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Login</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
