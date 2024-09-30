import { ProductProps } from "@/models";
import { formatVND } from "@/utils";
import { Button, Divider } from "@nextui-org/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";

interface OrderItemProps {
  code: string;
  price: ProductProps["price"];
  discount: ProductProps["discount"];
  quantity: number;
  totalPayment: number;
  router: AppRouterInstance;
  locale?: string
}

const OrderItem: React.FC<OrderItemProps> = ({
  code,
  price,
  discount,
  quantity,
  totalPayment,
  router,
  locale = 'vi',
}) => {
  return (
    <div className="text-[#707070] flex flex-col gap-4 py-3 px-5 rounded shadow-[0_0_5px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.2)] shadow-transition">
      <div className="grid grid-cols-2">
        <div className="text-base sm:text-xl">{code}</div>
        <div className="text-base sm:text-xl justify-self-end">
          {formatVND(Number(price))}
        </div>
        <div className="opacity-80 ">Quantity: {quantity}</div>
        <div className="opacity-80 justify-self-end ">
          - {formatVND(Number(discount))}
        </div>
      </div>

      <Divider className="bg-black" />

      <div className="grid lg:grid-cols-[auto_1fr] gap-3  lg:gap-7 items-center">
        <div className="lg:justify-self-end text-base sm:text-xl lg:order-2">
          Tổng tiền: {formatVND(Number(totalPayment - 1231))}
        </div>

        <div className="flex flex-row gap-3 lg:order-1">
          <Button
            variant="bordered"
            className="w-full lg:w-[220px] border-black font-bold rounded"
          >
            Mua lại
          </Button>
          <Button
            color="warning"
            className="w-full lg:w-[220px] text-white rounded"
            onClick={() => router.push(`/${locale}/orderDetails/${code}`)}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
