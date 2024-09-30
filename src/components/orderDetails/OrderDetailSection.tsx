"use client";

import { ArrowLeft } from "@/config/icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IOrders, ProductProps } from "@/models";
import ReceiveInfo from "@/components/cart/ReceiveInfo";
import { DUMP_PAYMENT_METHOD, DUMP_SHIPPING_METHOD, PROMOTIONS } from "@/data";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Checkbox,
  Divider,
  Image,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { formatVND } from "@/utils";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import appConfig from "@/config/appConfig";

const BILLS = [
  { field: "Tên công ty:", value: "Công ty trách nhiệm hữu hạn Hữu Tiến" },
  { field: "Mã số thuế:", value: "001122445533" },
  { field: "Email:", value: "Huutienofficial@gmail.com" },
  { field: "Tỉnh/Thành:", value: "Cần Thơ" },
  { field: "Quận/Huyện:", value: "Ninh Kiều" },
  { field: "Phường/Xã:", value: "Xuân Khánh" },
  { field: "Số nhà, đường:", value: "310 đường 30/4" },
];

const STATUS_ORDER = {
  current: 3,
  items: [
    { name: "Đơn hàng đã đặt", icon: <LocalMallIcon /> },
    { name: "Đã duyệt", icon: <TaskAltIcon /> },
    { name: "Đang giao hàng", icon: <DepartureBoardIcon /> },
    { name: "Giao thành công", icon: <LocalShippingIcon /> },
  ]
}

const OrderDetailSection = () => {
  const [code, setCode] = useState<IOrders["code"] | null>(null);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const { locale } = useParams();

  const codeParams: any = useParams()["id"];

  console.log("codeParams", codeParams);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "null");

    setTotalPayment(orders.totalPayment ?? 0)
    setCode(codeParams);

    if (orders) {
      setOrder(orders);
      setProducts(orders.products);
    }
  }, [codeParams]);

  return (
    <div className="flex flex-col w-full gap-7">
      <div className="flex flex-row items-center w-full relative gap-5">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}/${appConfig.path.order}`}>
            <ArrowLeft size={30} />
          </Link>
        </div>
        <div className="flex flex-1 justify-between items-center text-lg sm:text-4xl font-medium capitalize">
          {code}
        </div>
      </div>

      {/* Children */}
      <div className="flex flex-col lg:flex-row gap-[100px] md:w-3/4 w-full lg:w-full mx-auto">
        <div className="flex flex-col gap-12 flex-1">
          <ReceiveInfo />

          <ElectricBill bills={BILLS} />

          <div className="flex flex-col gap-10">
            {products?.map((item, index) => {
              const { product, quantity } = item;
              const { id, name, image, price, discount } = product;

              return (
                <PaymentProduct
                  name={name}
                  id={id}
                  image={image}
                  price={price}
                  discount={discount}
                  quantity={quantity}
                  key={index}
                />
              );
            })}
          </div>

          <div className="capitalize text-sm">
            Tổng khối lượng giỏ hàng: <span className="font-bold">0.5Kg</span>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mx-auto gap-5 flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="w-full uppercase text-lg font-semibold text-center">
              Shipping information
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Phương thức vận chuyển */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-5 mb-5">
                <div className="flex flex-row justify-between items-center gap-1">
                  <div className="text-sm font-medium">Tình trạng đơn hàng</div>
                  <div className="text-xs underline">Lựa chọn khác</div>
                </div>

                <StepStatusOrder current={2} items={STATUS_ORDER.items} />
              </div>

              <div className="flex flex-row justify-between items-center gap-1">
                <div className="text-sm font-medium">
                  Phương thức vận chuyển
                </div>
                <div className="text-xs underline">Lựa chọn khác</div>
              </div>

              <Select
                isRequired
                defaultSelectedKeys={[`${DUMP_SHIPPING_METHOD[0].id}`]}
                variant="underlined"
              >
                {DUMP_SHIPPING_METHOD.map((item) => (
                  <SelectItem key={item.id}>{item.name}</SelectItem>
                ))}
              </Select>
            </div>

            {/* Hình thức thanh toán */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between items-center gap-1">
                <div className="text-sm font-medium">Hình thức thanh toán</div>
                <div className="text-xs underline">Lựa chọn khác</div>
              </div>

              <Select
                isRequired
                defaultSelectedKeys={[`${DUMP_PAYMENT_METHOD[0].id}`]}
                variant="underlined"
              >
                {DUMP_PAYMENT_METHOD.map((item) => (
                  <SelectItem key={item.id}>{item.name}</SelectItem>
                ))}
              </Select>
            </div>

            <Checkbox radius="full" className="text-sm">
              Nhận tại cửa hàng
            </Checkbox>

            <Divider className="bg-black" />

            <Checkbox radius="full">Xuất hóa đơn công ty</Checkbox>

            <Divider className="bg-black" />

            <div className="flex flex-row justify-between items-center gap-5 sm:gap-8">
              <div className="font-bold text-nowrap">Mã giảm giá</div>
              <Autocomplete
                label="Chọn hoặc nhận mã"
                className="max-w-xs border border-gray-300"
              >
                {PROMOTIONS.map((promotion, index) => (
                  <AutocompleteItem key={index} value={promotion.id}>
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
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>

            <Divider className="bg-black" />

            <div className="flex flex-col gap-3">
              <div className="font-bold">Ghi chú đơn hàng</div>
              <Textarea
                placeholder="Nhập nội dung"
                min={7}
                className="border border-gray-300"
              />
            </div>

            <Divider className="bg-black" />

            <div className="flex flex-col gap-3">
              <div className="font-bold">Thời gian giao hàng dự kiến</div>
              <div>5 ngày làm việc</div>
            </div>

            <Divider className="bg-black" />

            <div className="grid grid-flow-row grid-cols-2 gap-3">
              <div className="font-bold">Tổng tiền</div>
              <div className="text-[#707070] text-lg justify-self-end">
                {formatVND(totalPayment)}
              </div>
              <div className="font-bold">Khuyến mãi</div>
              <div className="text-[#707070] text-lg justify-self-end">
                - {formatVND(0)}
              </div>
              <div className="font-bold">Phí vận chuyển</div>
              <div className="text-[#707070] text-lg justify-self-end">
                - {formatVND(0)}
              </div>
              <div className="font-bold">Số điểm tích lũy</div>
              <div className="text-[#707070] text-lg justify-self-end">
                50
              </div>
              <div className="font-bold">Tồng thanh toán</div>
              <div className="text-[#707070] text-lg justify-self-end">
                {formatVND(totalPayment)}
              </div>
            </div>

            <Button
              color="primary"
              className="text-white"
            // onClick={handleConfirm}
            >
              Đã nhận được hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailSection;

const PaymentProduct: React.FC<ProductProps & { quantity: number }> = ({
  id,
  name,
  image,
  price,
  discount = 0,
  quantity,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-start gap-3">
        <div className="flex flex-row gap-1">
          <div className="w-[100px]">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-[auto_auto] w-full gap-4">
          <div className="col-span-2 flex flex-col sm:flex-row justify-between gap-1 sm:gap-10">
            <div className="flex flex-col w-full md:w-[300px] gap-1">
              <div className="font-semibold">{name}</div>
              <div className="text-xs text-[#707070]">
                Mô tả sản phẩm 1, Mô tả sản phẩm 2, Mô tả sản phẩm 3, Mô tả sản
                phẩm 4.
              </div>
            </div>

            <div className="flex flex-col flex-start sm:items-end gap-3">
              <div className="flex flex-row flex-start items-center sm:items-end sm:flex-col gap-3 sm:gap-1">
                <div className="text-lg">
                  {formatVND(
                    Number((price - (price * discount) / 100) * quantity)
                  )}
                </div>
                <div className="text-sm text-[#F01919]">
                  - {formatVND(49000)}
                </div>
              </div>
              <div className="text-xs text-[#707070]">đã giảm giá</div>
            </div>
          </div>

          <div className="text-sm text-[#707070]">Số lượng: {quantity}</div>
        </div>
      </div>
    </div>
  );
};

const StepStatusOrder: React.FC<{ current: number, items: { name: string, icon: any }[] }> = ({ current, items }) => (
  <div className="flex flex-row">
    {items.map((status, index) => (
      <div className="flex flex-col flex-1 gap-8" key={index}>
        <div className="flex justify-center items-center">
          <div className={`border border-b-4 w-full  ${index !== 0 ? (index < current ? "border-main" : "border-gray-300") : "border-none"}`}></div>
          <div className={`flex justify-center items-center ${index < current ? "text-main" : "text-gray-500"}`}>{status.icon}</div>
          <div className={`border border-b-4 w-full  ${index !== items.length - 1 ? (index < current - 1 ? "border-main" : "border-gray-300") : "border-none"}`}></div>
        </div>
        <div className={`flex justify-center items-center text-center text-sm sm:text-base ${index < current ? "text-main" : ""}`}>
          {status.name}
        </div>
      </div>
    ))}
  </div>
)

const ElectricBill : React.FC<{ bills: { field: string, value: string }[] }> = ({ bills }) => (
  <div className="flex flex-col gap-3">
    <div className="capitalize text-xl font-medium">
      Hóa đơn điện tử
    </div>
    {BILLS.map((bill, index) => (
      <div
        className="flex flex-row gap-5 justify-between items-center"
        key={index}
      >
        <div>{bill.field}</div>
        <div className="font-bold">{bill.value}</div>
      </div>
    ))}
  </div>
)