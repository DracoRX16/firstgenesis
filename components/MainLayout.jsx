"use client";
import MainHeader from "./MainHeader";
import Logo2 from "@/app/logo2";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-gradient-to-b from-gray-200 to-violet-300 w-full min-h-screen text-black">
      <MainHeader />

      {!isHomePage && (
        <div className="flex justify-start items-start">
        <NavBar/>
        <main className="flex-1">{children}</main>
        </div>
      )}
      
      {isHomePage &&(
      <div className="relative mt-8">
    <div className="fixed top-14 left-0 w-full z-10">
        <NavBar />
    </div>
    <div className="flex flex-col items-center justify-center mt-16">
        <p className="text-2xl font-bold tracking-tight text-indigo-950 sm:text-5xl text-center">
            Empowering <br /> First-Generation Students, <br /> With First Class Finances
        </p>
    </div>
</div>

      )}
      
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
