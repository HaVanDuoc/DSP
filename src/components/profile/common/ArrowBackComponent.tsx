// "use client";

import appConfig from "@/config/appConfig";
import { ArrowLeft } from "@/config/icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ArrowBackComponent = () => {
  const { locale } = useParams();

  return (
    <Link href={`/${locale}/${appConfig.path.home}`}>
      <ArrowLeft />
    </Link>
  );
};

export default ArrowBackComponent;
