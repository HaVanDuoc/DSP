"use client";

import { Divider } from "@nextui-org/react";
import React, { Suspense, useEffect, useState } from "react";
import { INotify } from "@/models";
import AppTableList from "@/components/common/AppTableList";
import AppContainer from "@/components/common/AppContainer";
import {  NOTIFY } from "@/data/profile/notify";
import EmptyNotify from "@/components/profile/notify/EmptyNotify";
import TabSection from "@/components/profile/notify/TabSection";

const NotifyPage = () => {
  const [notify, setNotify] = useState<INotify[]>(NOTIFY);
  const [currentPage, setCurrentPage] = React.useState(1);

  const sizePage = 5;
  const start = sizePage * (currentPage - 1);
  const end = sizePage * currentPage - 1;

  useEffect(() => {}, [notify]);

  const handleSeen = (id: number) => {
    const updateNotify = notify.map((notify) =>
      notify.id === id ? { ...notify, seen: true } : notify
    );
    setNotify(updateNotify);
  };

  const handleDelete = (id: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from propagating to parent elements
    const updatedNotify = notify.filter(
      (notification) => notification.id !== id
    );
    setNotify(updatedNotify);
  };

  return (
    <Suspense>
      <AppContainer>
        <div className="flex flex-row text-black sm:text-base text-sm gap-10">
          <div className="flex flex-col w-full gap-7">
            {/* Children */}
            <div className="flex flex-col gap-10 text-sm pb-10">
              <TabSection setNotify={setNotify} />

              <AppTableList
                tableList={
                  <div className="flex flex-col shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]">
                    {notify && notify.length > 0 ? (
                      notify.slice(start, end + 1).map((notify, index) => (
                        <div
                          onClick={() => handleSeen(notify.id)}
                          className={`grid grid-cols-[auto_auto] xl:grid-cols-[auto_auto_auto] border-b border-b-black p-4 md:py-6 md:px-8 gap-5 ${
                            notify.seen ? "opacity-50" : "opacity-100"
                          }`}
                          key={index}
                        >
                          <div className="col-span-auto flex flex-row gap-1 font-bold tracking-widest order-1 justify-self-start">
                            {notify.dateReceive}
                          </div>

                          <div className="flex flex-row gap-5 items-center order-3 xl:order-2 col-span-2 xl:col-span-1">
                            <div className="order-3">{notify.type.icon}</div>
                            <div className="order-4">{notify.content}</div>
                          </div>

                          <div className="flex flex-row items-center gap-3 order-2 xl:order-3 justify-self-end">
                            <div className="text-[#FFC535] text-nowrap">
                              Đánh dấu đã đọc
                            </div>
                            <Divider
                              orientation="vertical"
                              className="bg-black"
                            />
                            <div
                              className="text-[#DC3333] cursor-pointer"
                              onClick={(e) => handleDelete(notify.id, e)}
                            >
                              Xóa
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <EmptyNotify />
                    )}
                  </div>
                }
                sizePage={sizePage}
                dataLength={notify.length}
                positionPagination="end"
                onChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </AppContainer>
    </Suspense>
  );
};

export default NotifyPage;
