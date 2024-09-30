import Link from "next/link";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RedirectTitle = ({
  label = "Xem thêm",
  href,
}: {
  label?: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center flex-row gap-2 font-bold text-sm sm:text-base group transition-all duration-200 ease-in-out"
    >
      <p className="group-hover:text-main">{label}</p>
      <ArrowForwardIcon fontSize="small" className="group-hover:text-main group-hover:ml-1 transition-all duration-200 ease-in-out" />
    </Link>
  );
};

export default RedirectTitle;
