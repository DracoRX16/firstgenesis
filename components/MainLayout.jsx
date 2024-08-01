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
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      )}

      {isHomePage && (
        <div className="relative mt-8">
          <div className="fixed top-14 left-0 w-1/5 z-10">
            <NavBar />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <p className="text-2xl font-bold tracking-tight text-indigo-950 sm:text-5xl text-center">
              Empowering <br /> First-Generation Students <br /> With First
              Class Solutions
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
      {isHomePage && (
        <div className="bg-violet-300 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What FirstGenesis Offers
              </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                    <a href="/wolframalpha" className="cursor-pointer hover:underline"> WolframAlpha Integration </a>
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    FirstGenesis integrates WolframAlpha to provide users with
                    powerful computational intelligence, allowing for advanced
                    queries, precise calculations, and access to a vast
                    knowledge base directly within the application.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                  <a href="/expense-tracker" className="cursor-pointer hover:underline"> Expense Tracker </a>
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    The Expense Tracker allows users to log, manage, and
                    visualize their daily expenses with ease. Users can track
                    costs, view historical data, and gain insights through
                    interactive charts.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                  <a href="/find-scholarships" className="cursor-pointer hover:underline"> Scholarship Finder </a>
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    The Scholarship Finder helps users discover scholarships by
                    providing a curated list of opportunities tailored to their
                    needs, simplifying the search for financial aid.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                  <a href="/about" className="cursor-pointer hover:underline"> And Much More To Be Added Soon </a>
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    Stay tuned for exciting updates! We&apos;re continuously working
                    on adding new features and improvements to enhance your
                    experience and provide even more valuable resources and
                    tools for your needs.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
