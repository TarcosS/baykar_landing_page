import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center px-4 py-4 text-amber-900 lg:px-20 lg:py-[30.5px]">
      <h1 className="text-[32px]">Collers</h1>
      
      <div className="p-2 cursor-pointer ml-auto md:hidden flex">
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
        <Button>Sign up now</Button>
      </div>
    </div>
  );
};

export default Navbar;
