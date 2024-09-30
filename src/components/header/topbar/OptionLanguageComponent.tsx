"use client";

import { locales } from "@/i18n/routing";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const OptionLanguageComponent = () => {
  const { locale: currentLocale } = useParams();
  const router = useRouter();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;

    // Chuyển hướng đến URL mới với locale đã chọn
    router.replace(`/${selectedLocale}`);
  };

  return (
    <section className="max-w-sm mx-auto ">
      <select
        value={currentLocale}
        onChange={changeLanguage}
        className="xl:w-14 lg:w-12 block p-1 bg-transparent xl:text-sm lg:text-[10px] cursor-pointer"
      >
        {locales.map((locale) => (
          <option className="text-gray-900" value={locale} key={locale}>
            {locale}
          </option>
        ))}
      </select>
    </section>
  );
};

export default OptionLanguageComponent;
