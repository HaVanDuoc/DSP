import React from "react";

const RankSection = () => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-7 sm:p-5 w-full">
      <div className="text-lg sm:text-xl font-bold capitalize">
        Tổng quan thứ bậc
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="font-bold">Hạng thành viên</div>
        <div className="sm:text-left text-right">Gold</div>
        <div className="font-bold">Số điểm hiện tại</div>
        <div className="sm:text-left text-right">520 Điểm</div>
        <div className="font-bold">Số điểm cần tích lũy thêm để tăng hạng</div>
        <div className="sm:text-left text-right">
          480 điểm nữa để thăng hạng
        </div>
      </div>
    </div>
  );
};

export default RankSection;
