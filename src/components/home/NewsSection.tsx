import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Image from "next/image";
import appConfig from "@/config/appConfig";
import Link from "next/link";
import TitleSection from "./TitleSection/TitleSection";
import { IoIosArrowForward } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";

export interface INews {
  poster: string;
  timePost: string;
  id: number | string;
  title: string;
  imgSrc: string;
  content: string;
  comments: number;
}

const NewsSection = ({
  locale,
  newsData,
}: {
  locale: string;
  newsData: INews[];
}) => {
  return (
    <div className="flex flex-col text-black">
      <TitleSection
        title="Tin mới nhất"
        redirectMore={`/${locale}/${appConfig.path.blogs}`}
      />

      {/* List News */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {newsData?.map((news) => {
          const { id, comments, content, imgSrc, title, poster, timePost } =
            news;

          return (
            <Link
              href={`/${locale}/${appConfig.path.blogs}/${id}`}
              className="group flex flex-col border border-gray-300 rounded-md p-4 gap-6 w-[400px] cursor-pointer shadow-md transition-all duration-300 ease-in-out"
              key={id}
            >
              <div className="flex justify-center items-center h-[255px] overflow-hidden rounded-sm ">
                <Image
                  src={imgSrc}
                  alt={""}
                  width={400}
                  height={255}
                  className="h-full object-cover rounded-none group-hover:scale-110 transition-scale duration-200 ease-in-out"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row justify-start items-center gap-2">
                    <AccountCircleOutlinedIcon
                      style={{ color: "var(--main)" }}
                    />
                    <span className="text-[#475156] text-sm">{poster}</span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <CalendarTodayIcon style={{ color: "var(--main)" }} />
                    <span className="text-[#475156] text-sm">{timePost}</span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <BiMessageRounded className="text-2xl text-main" />
                    <span className="text-[#475156] text-sm">{comments}</span>
                  </div>
                </div>

                <div className="text-lg font-extrabold group-hover:text-main transition-colors duration-200 ease-in-out line-clamp-2">
                  {title}
                </div>

                <div className="text-sm opacity-70 line-clamp-3">{content}</div>
              </div>

              <div className="flex flex-row justify-start items-center gap-2 text-main uppercase font-bold text-sm h-12 group">
                <span>Xem thêm</span>
                <IoIosArrowForward className="text-lg group-hover:ml-1 transition-all duration-100 ease-in-out" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsSection;
