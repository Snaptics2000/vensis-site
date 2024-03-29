"use client"


import Link from "next/link";
import { ChevronRight, LucideSidebarClose, MenuIcon } from "lucide-react"; // Assuming you're using react-feather for the ChevronRight icon
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="mx-auto flex justify-between items-center font-cabinet-grotesk py-4 px-4 md:ml-12 md:mr-12">
        <div className="flex items-center ml-12">
          <h1 className="text-6xl font-bold text-[#000000] font-cabinet-grotesk">Logo</h1>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-4">
            <Link href="/Home">
              <p className="text-[#212121] font-[500] text-[20px] hover:text-[#6B49CE] font-cabinet">
                Home
              </p>
            </Link>
            <div className="h-6 border-l border-gray-300"></div>
            <Link href="/About">
              <p className="text-[#212121] font-[500] text-[20px] hover:text-[#6B49CE] font-cabinet">
                About Us
              </p>
            </Link>
            <div className="h-6 border-l border-gray-300"></div>
            <Link href="/Contact">
              <p className="text-[#212121] font-[500] text-[20px] hover:text-[#6B49CE] font-cabinet">
                For Employers
              </p>
            </Link>
          </div>
          <div className="h-6 border-l border-gray-300"></div>

          <button className="ml-6 w-40 mr-12 px-4 py-2 border border-1 text-[#6B49CE] border-[#6B49CE] rounded-full flex items-center justify-center font-cabinet">
            View Jobs
            <ChevronRight color="#6B49CE" className="ml-2" />
          </button>
        </div>
        <div className="md:hidden mr-12" onClick={toggleMenu}>
          <MenuIcon size={25} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-[65%] h-screen bg-gray-300 p-10 ${
          openMenu ? 'ease-in duration-500' : 'left-[-100%] ease-in duration-500'
        }`}
      >
        <div onClick={toggleMenu} className="flex justify-end">
          <LucideSidebarClose />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 font-cabinet-grotesk">
          <Link href="/Home">
            <p className="text-[#212121] font-[500] text-sm hover:text-[#6B49CE] font-cabinet">
              Home
            </p>
          </Link>
          <div className="h-6 border-l border-gray-300"></div>
          <Link href="/About">
            <p className="text-[#212121] font-[500] text-sm hover:text-[#6B49CE] font-cabinet">
              About Us
            </p>
          </Link>
          <div className="h-6 border-l border-gray-300"></div>
          <Link href="/Contact">
            <p className="text-[#212121] font-[500] text-sm hover:text-[#6B49CE] font-cabinet">
              For Employers
            </p>
          </Link>
        </div>
        <button className="ml-6 w-40 mr-12 mt-12 px-4 py-2 border border-1 text-[#6B49CE] border-[#6B49CE] rounded-full flex items-center justify-center font-cabinet">
          View Jobs
          <ChevronRight color="#6B49CE" className="ml-2" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
