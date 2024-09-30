import React from "react";

const TitleContainer = ({
  startContent,
  centerContent,
  endContent,
  children,
}: {
  startContent: React.ReactNode;
  centerContent?: React.ReactNode;
  endContent: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`w-full flex flex-wrap justify-between items-center pb-3 sm:pb-10 gap-2 sm:gap-5 text-black `}
    >
      <div className="order-1">{startContent}</div>

      <div className="order-3 lg:order-2 flex w-full lg:w-auto justify-start">
        {centerContent || children}
      </div>

      <div className="order-2 lg:order-3 flex flex-row justify-center items-center gap-5">
        {endContent}
      </div>
    </div>
  );
};

export default TitleContainer;
