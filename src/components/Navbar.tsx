'use client';

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex flex-row items-center px-4 py-4 text-amber-900 lg:px-20 lg:py-[30.5px]">
      <h1 className="text-[32px]">Collers</h1>
      
      <div 
        className="p-2 cursor-pointer ml-auto md:hidden flex"
        onClick={handleMenu}
      >
        <Image 
          src={'/icons/menu-scale.svg'}
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
        <Button className="hover:bg-amber-900 hover:bg-opacity-80 hover:text-white transition-colors">Sign up now</Button>
      </div>
      <div
        className="h-[100dvh] w-[90dvw] fixed z-50 top-0 right-0 transform transition-transform duration-300 ease-in-out md:hidden bg-amber-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)]"
        style={{
          transform: isMenuOpen ? 'translate(0)' : 'translate(100%)'
        }}
      >
        <h1 className="text-[32px] text-center text-white mt-6 mb-4">Collers</h1>
        <div className="ml-auto flex-col items-center text-base font-medium flex px-8 gap-4">
          <a className="px-2 py-3 w-full flex justify-center text-white border-[0.5px] border-white border-t-0 border-x-0" href="#products" onClick={handleMenu}>
            Products
          </a>
          <a className="px-2 py-3 w-full flex justify-center text-white border-[0.5px] border-white border-t-0 border-x-0" href="#solutions" onClick={handleMenu}>
            Solutions
          </a>
          <a className="px-2 py-3 w-full flex justify-center text-white border-[0.5px] border-white border-t-0 border-x-0" href="#pricing" onClick={handleMenu}>
            Pricing
          </a>
          <a className="px-2 py-3 w-full flex justify-center text-white border-[0.5px] border-white border-t-0 border-x-0" href="#resources" onClick={handleMenu}>
            Resources
          </a>
          <a className="px-2 py-3 w-full flex justify-center text-white border-[0.5px] border-white border-t-0 border-x-0" href="#login" onClick={handleMenu}>
            Login
          </a>
          <Button className="border-white hover:bg-opacity-80 text-white transition-colors w-full mt-7" onClick={handleMenu}>Sign up now</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
