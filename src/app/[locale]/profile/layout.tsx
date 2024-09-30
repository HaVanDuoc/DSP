"use client";
import React, { useState } from "react";
import Sidebar from "@/components/profile/Sidebar";
import { Button } from "@nextui-org/react";
import { IoMdClose } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { NAV_PROFILE } from "@/data/profile/sidebar";

const LayoutProfile = ({ children }: { children: React.ReactNode }) => {
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const currentPath = usePathname().slice(4);
  const title = NAV_PROFILE.find(item => item.href.includes(currentPath))?.name;

  return (
    <div className=" max-w-screen-xl my-7 sm:my-10 mb-6 mx-auto px-4 h-auto flex gap-4 w-full">
      <aside
        className={`fixed md:sticky top-0 left-0 flex h-screen bg-white overflow-hidden transition-width duration-300 ${
          isOpenSidebar ? "md:w-[320px] w-full p-4 z-50" : "w-0"
        } `}
      >
        <Sidebar />
        <Button
          isIconOnly
          variant="light"
          className="absolute top-5 right-5 rounded-full md:hidden"
          onClick={() => setOpenSidebar(false)}
        >
          <IoMdClose size={24} />
        </Button>
      </aside>

      <main className="flex-1">
        <div className="flex flex-row items-center w-full relative mb-7">
          <div
            className={`absolute top-0 left-0 h-full flex items-center justify-center text-lg sm:text-xl ${
              isOpenSidebar ? "md:hidden" : ""
            }`}
            onClick={() => setOpenSidebar(true)}
          >
            <FiArrowLeft />
          </div>
          <div className="flex flex-1 justify-center items-center text-lg sm:text-4xl font-medium capitalize">
            {title as React.ReactNode}
          </div>
        </div>

        {children}
      </main>
    </div>
  );
};

export default LayoutProfile;
