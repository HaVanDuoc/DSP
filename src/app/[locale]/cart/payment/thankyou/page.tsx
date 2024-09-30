import AppContainer from "@/components/common/AppContainer";
import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import appConfig from "@/config/appConfig";

const page = ({ params }: { params: { locale: string } }) => {
  return (
    <AppContainer>
      <div className="flex flex-col gap-1 justify-center items-center py-10">
        <Image
          src="/images/Screenshot_2024-08-14_at_15.53.502-removebg-preview.png"
          alt="slkdjfoiwe"
          className="w-[62vw] sm:w-[400px]"
        />
        <div className="text-2xl sm:text-4xl text-main">Order success</div>
        <div className="text-lg sm:text-xl font-medium">Order code:</div>
        <div className="text-xs sm:text-base">Thanks for your orders</div>
        <div className="text-xs sm:text-sm">Return</div>
        <Link
          href={`${params.locale}/${appConfig.path.home}`}
          className="text-xs sm:text-sm text-main"
        >
          Home
        </Link>
      </div>
    </AppContainer>
  );
};

export default page;
