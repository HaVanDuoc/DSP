"use client";

import AppTableList from "@/components/common/AppTableList";
import { PROMOTIONS } from "@/data";
import { Button, Image } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import EmptyPromotion from "@/components/profile/promotion/EmptyPromotion";
import { NAV_PROMOTION } from "@/data/profile/promotion";
import AppContainer from "@/components/common/AppContainer";

const PromotionSession = () => {
  const [promotion, setPromotion] = useState(PROMOTIONS);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentTab, setCurrentTab] = useState(NAV_PROMOTION[0]);

  const searchParams = useSearchParams();
  const paramsPage = searchParams.get("page");
  const pathname = usePathname();
  const router = useRouter();
  const sizePage = 5;
  const start = sizePage * (currentPage - 1);
  const end = sizePage * currentPage - 1;

  useEffect(() => {
    setCurrentPage(Number(paramsPage ?? 1));
    setCurrentTab(searchParams.get("tab") || NAV_PROMOTION[0]);
  }, [paramsPage]);

  const createParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const onClickTab = (tabName: string) => {
    setCurrentTab(tabName);
    router.push(pathname + "?" + createParams("tab", tabName));
  };

  return (
    <AppContainer>
      <div className="flex flex-row text-black sm:text-base text-sm gap-10">
        <div className="flex flex-col w-full gap-7">
          {/* Children */}
          <div className="flex flex-col gap-10 text-sm pb-10">
            <div className="flex flex-row gap-5 justify-between items-center overflow-auto">
              {NAV_PROMOTION.map((nav, index) => (
                <div
                  onClick={() => onClickTab(nav)}
                  className="cursor-pointer flex flex-row gap-3 items-center justify-between group"
                  key={index}
                >
                  <div
                    className={`sm:text-lg text-nowrap flex flex-row justify-between gap-3 group-hover:text-[#FFC535] ${
                      currentTab === nav ? "text-[#FFC535]" : ""
                    }`}
                  >
                    {nav}
                  </div>
                </div>
              ))}
            </div>

            <AppTableList
              tableList={
                <div className="flex flex-col shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] p-5 gap-3">
                  {promotion && promotion.length > 0 ? (
                    promotion.slice(start, end + 1).map((promotion, index) => (
                      <div
                        className="flex flex-row justify-between items-center gap-5"
                        key={index}
                      >
                        <div className="flex flex-row gap-2">
                          <div className="bg-gray-500">
                            <Image src="" alt="promotion" />
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="font-bold">
                              Giảm {promotion.discount}
                            </div>
                            <div>Cho đơn hàng từ {promotion.forOrderTo}</div>
                            <div>HSD {promotion.endDate}</div>
                          </div>
                        </div>
                        <Button className="bg-[#FFC535] text-white rounded md:w-[220px] md:h-[50px] w-auto h-[45px]">
                          Lưu
                        </Button>
                      </div>
                    ))
                  ) : (
                    <EmptyPromotion />
                  )}
                </div>
              }
              sizePage={sizePage}
              dataLength={promotion.length}
              positionPagination="end"
              onChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default PromotionSession;
