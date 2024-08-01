import React, { useContext } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineInfo } from "react-icons/ai";
import { SiWolfram } from "react-icons/si";
import Link from "next/link";

import { MenuContext } from "@/context/MenuContext";


const NavBar = () => {
    const { open } = useContext(MenuContext);
  return (
    <aside
          className={`bg-violet-200 rounded-lg outline outline-violet-400 overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4 `}
        >
          <ul>
            <li className="flex justify-start items-center hover:bg-violet-400 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-violet-400 rounded-xl p-2">
              <SiWolfram className="mr-2" />
              <Link href="/wolframalpha">Ask WolframAlpha</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-violet-400 rounded-xl p-2">
              <FaRegMoneyBillAlt className="mr-2" />
              <Link href="/expense-tracker">Expense Tracker</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-violet-400 rounded-xl p-2">
              <LuGraduationCap className="mr-2" />
              <Link href="/find-scholarships">Find Scholarships</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-violet-400 rounded-xl p-2">
              <AiOutlineInfo className="mr-2" />
              <Link href="/about">About</Link>
            </li>
          </ul>
        </aside>
  )
}

export default NavBar