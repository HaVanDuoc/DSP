import React from "react";
import FloatingTopButton from "./FloatingTopButton";
import FloatingSupportButton from "./FloatingSupportButton";

const FloatingWrapper = () => {
  return (
    <div className="fixed bottom-[5%] right-[3%] z-[99] flex flex-col gap-2">
      <FloatingSupportButton />
      <FloatingTopButton />
    </div>
  );
};

export default FloatingWrapper;
