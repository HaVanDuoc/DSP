import Image from "next/image";
import React from "react";

const EmptyNotify = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[5vw] w-full gap-5">
      <Image
        src="/images/amico.png"
        alt="empty-notify"
        className="lg:w-[250px] sm:w-[200px] w-[180px]"
      />
      <div className="sm:text-xl">Hiện tại bạn chưa có thông báo nào!</div>
    </div>
  );
};

export default EmptyNotify;
