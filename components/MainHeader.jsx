"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const MainHeader = () => {
   const { toggle } = useContext(MenuContext);

   return (
      <div className="bg-white flex items-center px-4 h-12 mb-4">
            <div onClick={toggle} className="lg:invisible">
               <FaBars className="cursor-pointer" />
            </div>

         <div className="flex-1 text-center">Welcome to FirstGenesis</div>
      </div>
   );
};

export default MainHeader;