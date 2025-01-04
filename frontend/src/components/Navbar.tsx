"use client";
import { Button } from "@nextui-org/react";
import logo from "../assets/logo-2.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="p-4 font-playwrite">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex gap-x-2 items-center">
          <Image src={logo} className="h-[40px] w-[40px]" alt="kono_logo" />
          <span className="text-2xl font-playwrite font-extrabold tracking-wider">
            Kono
          </span>
        </div>

        <div className=" flex items-center flex-shrink-0 gap-x-5 lg:flex">
          <Button
            color="secondary"
            variant="faded"
            className="font-urbanist px-4 py-4 text-md  tracking-wider"
          >
            Log in
          </Button>
          <Button
            color="primary"
            variant="faded"
            className="font-urbanist p-4 text-md"
          >
            Sign up
          </Button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
