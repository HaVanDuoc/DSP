import React from "react";

const HeadTitle = ({ title }: { title: string }) => {
  return (
    <div
      className={`font-semibold text-lg sm:text-xl lg:text-2xl capitalize pointer-events-none flex justify-start items-center`}
    >
      {title}
    </div>
  );
};

export default HeadTitle;
