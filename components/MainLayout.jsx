"use client";
import MainHeader from "./MainHeader";
import Logo2 from "@/app/logo2";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineInfo } from "react-icons/ai";
import { SiWolfram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400 w-full min-h-screen text-black">
      <MainHeader />

      <div className="flex flex-row items-center justify-between mt-8 relative">
        <nav
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4 `}
        >
          <ul>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <SiWolfram className="mr-2" />
              <Link href="/wolframalpha">Ask WolframAlpha</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <FaRegMoneyBillAlt className="mr-2" />
              <Link href="/expense-tracker">Expense Tracker</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <LuGraduationCap className="mr-2" />
              <Link href="/find-scholarships">Find Scholarships</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <AiOutlineInfo className="mr-2" />
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        {isHomePage && (
          <div className="flex justify-center text-center mt-8 ml-auto mr-auto">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Empowering <br /> First-Generation Students, <br /> With First
              Class Finances
            </p>
          </div>
        )}

        <div />
      </div>
      <main>{children}</main>
      {isHomePage && (
        <main className="flex justify-center items-center pt-10 pb-20 overflow:auto">
          <div class="relative flex justify-center items-center text-center">
            <Logo2 />
            <div className="absolute w-full max-w-lg h-full max-h-lg">
              <div class="absolute inset-x-0 top-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute inset-x-0 bottom-0  w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blobLeft animation-delay-4000"></div>
              <div class="absolute bottom-0 right-0  w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000"></div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default MainLayout;
