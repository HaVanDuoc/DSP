"use client";

import React, { useEffect, useState } from "react";
import { IOrders } from "@/models";
import AppTableList from "@/components/common/AppTableList";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import AppContainer from "@/components/common/AppContainer";
import EmptyOrders from "@/components/profile/order/EmptyOrders";
import FilterOrderSection from "@/components/profile/order/FilterOrderSection";
import OrderItem from "@/components/profile/order/OrderItem";
import { DUMP_ORDERS } from "@/data";

const OrderPage = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);

  const currentPage = useSearchParams().get("page") || 1;
  const sizePage = 5;
  const start = sizePage * (Number(currentPage) - 1);
  const end = sizePage * Number(currentPage) - 1;
  const router = useRouter();
  const { locale } = useParams();

  useEffect(() => {
    setOrders(DUMP_ORDERS);
  }, []);

  useEffect(() => {}, [currentPage]);

  return (
    <AppContainer>
      <div
        className="flex flex-row text-black sm:text-base text-sm gap-10"
        id="scroll-back-pagination"
      >
        <div className="flex flex-col w-full gap-7">
          {/* Children */}
          <div className="flex flex-col gap-5 text-sm pb-10">
            <FilterOrderSection orders={orders} setOrders={setOrders} />

            {/* Danh sách */}
            <AppTableList
              tableList={
                <div className="flex flex-col sm:gap-5 gap-3">
                  {orders && orders.length > 0 ? (
                    orders.slice(start, end + 1).map((order, index) => {
                      const {
                        code = "",
                        products,
                        status,
                        totalPayment,
                      } = order;
                      const quantity = products.reduce((total, product) => {
                        return total + product.quantity;
                      }, 0);
                      const price = products.reduce((total, product) => {
                        return total + product.product.price;
                      }, 0);
                      const discount = products.reduce((total, product) => {
                        return (
                          total +
                          (product.product.price *
                            (product.product.discount || 0)) /
                            100
                        );
                      }, 0);

                      return (
                        <OrderItem
                          code={code}
                          discount={discount}
                          price={price}
                          quantity={quantity}
                          totalPayment={totalPayment}
                          router={router}
                          locale={locale as string}
                          key={index}
                        />
                      );
                    })
                  ) : (
                    <EmptyOrders />
                  )}
                </div>
              }
              dataLength={orders.length}
              sizePage={sizePage}
              positionPagination="end"
            />
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default OrderPage;
