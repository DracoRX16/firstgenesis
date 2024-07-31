"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "@/app/logo";

const MainHeader = () => {
   const { toggle } = useContext(MenuContext);

   return (
      <div className="bg-white flex items-center justify-between px-4 h-14 mb-4 rounded-lg">
            <div onClick={toggle} className="lg:invisible">
               <FaBars className="cursor-pointer" />
            </div>

         <div className="flex-1 flex justify-center items-center">
            <div className="rounded-full outline outline-black p-2"><Logo /></div></div>
         <div className="w-6 h-6"></div>
      </div>
   );
};

export default MainHeader;