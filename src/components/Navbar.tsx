"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row items-center px-4 py-4 text-amber-900 lg:px-20 lg:py-[30.5px]">
      <h1 className="text-[32px]">Collers</h1>

      <div
        className="ml-auto flex cursor-pointer p-2 md:hidden"
        onClick={handleMenu}
      >
        <Image
          src={"/icons/menu-scale.svg"}
          width={24}
          height={24}
          alt="menu icon"
        />
      </div>
      <div className="ml-auto hidden flex-row items-center space-x-4 text-base font-medium md:flex">
        <a className="px-2 py-3" href="#products">
          Products
        </a>
        <a className="px-2 py-3" href="#solutions">
          Solutions
        </a>
        <a className="px-2 py-3" href="#pricing">
          Pricing
        </a>
        <a className="px-2 py-3" href="#resources">
          Resources
        </a>
        <a className="px-2 py-3" href="#login">
          Login
        </a>
        <Button className="transition-colors hover:bg-amber-900 hover:bg-opacity-80 hover:text-white">
          Sign up now
        </Button>
      </div>
      <div
        className="fixed right-0 top-0 z-50 h-[100dvh] w-[90dvw] transform bg-amber-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)] transition-transform duration-300 ease-in-out md:hidden"
        style={{
          transform: isMenuOpen ? "translate(0)" : "translate(100%)",
        }}
      >
        <h1 className="mb-4 mt-6 text-center text-[32px] text-white">
          Collers
        </h1>
        <div className="ml-auto flex flex-col items-center gap-4 px-8 text-base font-medium">
          <a
            className="flex w-full justify-center border-[0.5px] border-x-0 border-t-0 border-white px-2 py-3 text-white"
            href="#products"
            onClick={handleMenu}
          >
            Products
          </a>
          <a
            className="flex w-full justify-center border-[0.5px] border-x-0 border-t-0 border-white px-2 py-3 text-white"
            href="#solutions"
            onClick={handleMenu}
          >
            Solutions
          </a>
          <a
            className="flex w-full justify-center border-[0.5px] border-x-0 border-t-0 border-white px-2 py-3 text-white"
            href="#pricing"
            onClick={handleMenu}
          >
            Pricing
          </a>
          <a
            className="flex w-full justify-center border-[0.5px] border-x-0 border-t-0 border-white px-2 py-3 text-white"
            href="#resources"
            onClick={handleMenu}
          >
            Resources
          </a>
          <a
            className="flex w-full justify-center border-[0.5px] border-x-0 border-t-0 border-white px-2 py-3 text-white"
            href="#login"
            onClick={handleMenu}
          >
            Login
          </a>
          <Button
            className="mt-7 w-full border-white text-white transition-colors hover:bg-opacity-80"
            onClick={handleMenu}
          >
            Sign up now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
