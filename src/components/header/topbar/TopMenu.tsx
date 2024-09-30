"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { socialIcons } from "@/data/header/topMenu";
import OptionLanguageComponent from "./OptionLanguageComponent";
import appConfig from "@/config/appConfig";

const TopMenu = ({ locale }: { locale: string }) => {
  const t = useTranslations("topbar");

  return (
    <div className="w-full h-[52px] bg-main py-3  justify-between hidden lg:flex items-center text-[#ffffff] border-b-[0.5px]">
      <div className="font-normal xl:text-sm lg:text-[10px] justify-between flex items-center w-full h-full max-w-screen-xl mx-auto px-4">
        <div className="xl:w-[266px] lg:w-48">
          <div>{t("workTime")}</div>
        </div>
        <div className="">
          {t("address")}{" "}
          <span className="font-semibold underline">
            <Link href={`/${locale}/${appConfig.path.contact}`}>
              {t("contact")}
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-end xl:w-[280px] lg:w-[260px]">
          <div className="flex">
            <div className="lg:w-16 xl:w-20">{t("follow")}</div>
            <div className="flex items-center">
              {socialIcons.map((item) => (
                <div key={item.key}>{item.icon}</div>
              ))}
            </div>
          </div>

          <div className="h-[28px] w-[2px] bg-[#ffffff] opacity-[16%] lg:mx-1 xl:mx-3"></div>

          <OptionLanguageComponent />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
