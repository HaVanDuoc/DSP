import { DUMP_SERVICES } from "@/data";
import { Image } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import "@/styles/rippleServiceSection.css";

const ServiceSection = () => {
  return (
    <div className="flex flex-wrap bg-inherit gap-8 py-5 text-black">
      {DUMP_SERVICES?.map((service) => {
        const { id, srcImg, altImg, title1, title2 } = service;

        return (
          <Link
            href={"#"}
            className="flex flex-col flex-1 justify-center items-center gap-2 min-w-56 cursor-pointer hover:scale-[1.15] transform transition-transform ease-in-out"
            key={id}
          >
            <div className="ripple-service">
              <Image width={80} alt={altImg} src={srcImg} />
            </div>

            <div className="flex flex-col justify-center items-center gap-2 bg-white z-10">
              <div className="text-xl font-extrabold">{title1}</div>
              <div className="text-[14px]">{title2}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServiceSection;
