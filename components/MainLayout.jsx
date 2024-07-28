"use client";
import MainHeader from "./MainHeader";
import FinancialPlanning from "./FinancialPlanning";
import CareerOpportunities from "./CareerOpportunities";
import FindScholarships from "./FindScholarships";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineInfo } from "react-icons/ai";
import Link from "next/link";
import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-gray-200 w-full min-h-screen text-black">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
                  open ? "w-60 p-4" : "w-0"
               } lg:w-60 lg:p-4 `}>
          <ui>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <FaRegMoneyBillAlt className="mr-2" />
              <Link href="/FinancialPlanning">Financial Planning</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <FaRegLightbulb className="mr-2" />
              <Link href="/CareerOpportunities">Career Opportunities</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <LuGraduationCap className="mr-2" />
              <Link href="/FindScholarships">Find Scholarships</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-gray-100 rounded-xl p-2">
              <AiOutlineInfo className="mr-2" />
              <Link href="/about">About</Link>
            </li>
          </ui>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
