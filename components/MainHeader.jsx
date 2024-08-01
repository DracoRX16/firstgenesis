"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "@/app/logo";

import Link from "next/link";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div className="bg-gradient-to-b from-violet-300 to-gray-200 flex items-center justify-between px-4 h-14 mb-4 rounded-lg">
      <div onClick={toggle} className="lg:invisible">
        <FaBars className="cursor-pointer" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Link href="/">
          <div className="relative p-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-zinc-600 to-violet-950 filter blur opacity-75"></div>
            <div className="relative z-10 rounded-full bg-gray-900 p-2">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <div className="w-6 h-6"></div>
    </div>
  );
};

export default MainHeader;
