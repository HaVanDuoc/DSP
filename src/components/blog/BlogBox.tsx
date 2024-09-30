import appConfig from "@/config/appConfig";
import { BoxProps } from "@/models";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import truncateText from "./truncateText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const BlogBox = ({ store, variant }: BoxProps) => {
  const { locale } = useParams();

  return (
    <Link href={`/${locale}/${appConfig.path.blogs}/${store.id}`}>
      <div
        className={`rounded-lg group flex flex-col h-full min-h-[500px] hover:cursor-pointer ${
          variant === "dark" ? "bg-[#32312f] text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src={store.img}
            alt={store.name}
            className="w-full h-[300px] object-cover rounded-t-lg group-hover:scale-110 transition-all"
          />
        </div>
        <div className="pt-5 flex flex-col flex-grow">
          <h2 className="text-lg lg:text-xl font-medium h-auto lg:h-[100px] group-hover:text-main">
            {store.name}
          </h2>
          <p className="mt-2 text-sm lg:text-base mb-4 flex-grow h-[58px] lg:h-[75px]">
            {truncateText(store.description, 100)}
          </p>
          <div className="flex-1 flex w-full justify-start lg:justify-end">
            <Button
              className={`flex items-center border lg:border-none ${
                variant === "dark"
                  ? "bg-transparent text-white border-white"
                  : "bg-transparent text-black border-black"
              } lg:px-0 px-4`}
            >
              Xem thêm{" "}
              <span className="lg:block hidden">
                <ArrowForwardIosIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogBox;
