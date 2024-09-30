"use client";

import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Divider,
  Select,
  SelectItem,
  Textarea,
  Button,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { DUMP_PAYMENT_METHOD, DUMP_SHIPPING_METHOD } from "@/data";
import { useRouter } from "next/navigation";
import { ItemCart } from "@/models";
import { formatVND } from "@/utils";
import AppContainer from "@/components/common/AppContainer";
import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import ReceiveInfo from "@/components/cart/ReceiveInfo";
import PaymentProduct from "@/components/cart/PaymentProduct";

const VOUCHERS = [{ label: "Cat", value: "cat", description: "The second most popular pet in the world" },
{ label: "Dog", value: "dog", description: "The most popular pet in the world" },
{ label: "Elephant", value: "elephant", description: "The largest land animal" },]

const PaymentPage = () => {
  const [cart, setCart] = useState<ItemCart[]>([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState<ItemCart[]>([]);
  const [totalPayment, setPayment] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "null");
    const cart = JSON.parse(localStorage.getItem("cartProducts") || "");

    if (orders) {
      setOrder(orders);
      setProducts(orders.products);
      setPayment(orders.totalPayment);
      setCart(cart);
      if (orders === "null" || orders.status === "Đã xác nhận")
        return router.push("/cart");
    }
  }, []);

  const handleConfirm = () => {
    setOrder((prevOrder) => {
      const updateOrder = {
        ...prevOrder,
        status: "Đã xác nhận", // update status đơn hàng
      };
      localStorage.setItem("orders", JSON.stringify(updateOrder)); // update order in local storage

      // Update rồi thì phải xóa mấy products ra khỏi cart
      const updateCart = cart.filter(
        (cartItem) =>
          !products.some(
            (orderItem) => orderItem.product.id === cartItem.product.id
          )
      );

      localStorage.setItem("cartProducts", JSON.stringify(updateCart));

      router.push("/cart/payment/thankyou");

      return updateOrder;
    });
  };

  return (
    <div className="text-black text-sm sm:text-base">
      <AppContainer gap={"30px"}>
        <AppBreadcrumbs
          items={[
            { name: "Trang chủ", href: "/" },
            { name: "Giỏ hàng", href: "/cart" },
            { name: "Thanh toán", href: "/cart/payment" },
          ]}
        />

        <div className="flex w-full justify-center items-center text-3xl uppercase sm:mb-6">
          Giỏ hàng
        </div>

        <div className="flex flex-col lg:flex-row gap-[80px] md:w-3/4 w-full lg:w-full mx-auto">
          <div className="flex flex-col gap-8 flex-1">
            <ReceiveInfo />

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

          {/* Thanh toán */}
          <div className="w-full lg:w-[30vw] mx-auto gap-5 flex flex-col">
            <div className="w-full uppercase text-lg font-semibold text-center">
              Thanh toán
            </div>

            <div className="flex flex-col gap-5">

              {/* Phương thức vận chuyển */}
              <div className="flex flex-col gap-1">
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
                  <div className="text-sm font-medium">
                    Hình thức thanh toán
                  </div>
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

              <div className="flex flex-row justify-between items-center gap-[7vw]">
                <div className="font-bold text-nowrap">Mã giảm giá</div>
                <Autocomplete
                  label="Chọn hoặc nhận mã"
                  className="max-w-xs border border-gray-300"
                >
                  {VOUCHERS.map((voucher, index) => (
                    <AutocompleteItem key={index} value={voucher.value}>
                      {voucher.label}
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
                color="warning"
                className="text-white"
                onClick={handleConfirm}
              >
                Xác nhận đơn hàng
              </Button>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default PaymentPage;
