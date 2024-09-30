"use client";
import appConfig from "@/config/appConfig";
import { ProductProps } from "@/models";
import { formatVND } from "@/utils";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { Fragment } from "react";

const CardProduct: React.FC<ProductProps> = ({
  id,
  image,
  name,
  discount,
  price,
}) => {
  const { locale } = useParams();

  const newPrice =
    discount && discount > 0
      ? formatVND(Number(price) - Number(price) * Number(discount / 100))
      : formatVND(price);
  const oldPrice =
    discount && discount > 0 ? (
      <div className="sm:text-xs text-[10px] opacity-60 line-through">
        {formatVND(price)}
      </div>
    ) : (
      <Fragment />
    );

  return (
    <Link
      href={`/${locale}/${appConfig.path.productDetails}/${id}`}
      className="relative flex flex-col border-r-1 border-b-1 p-4 cursor-pointer gap-3 group text-black"
    >
      <div className="flex justify-center items-center mb-5 h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="group-hover:scale-110 object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-3 min-h-[80px]">
        <div className="text-sm group-hover:text-main line-clamp-2">{name}</div>
        <div className="flex flex-row justify-start items-center gap-2">
          <div className="text-red-600 font-bold text-sm sm:text-base">
            {newPrice}
          </div>
          <div className="sm:text-xs text-[10px] opacity-60 line-through">
            {oldPrice}
          </div>
        </div>
      </div>

      {/* Tag discount */}
      {discount && discount > 0 ? (
        <div className="absolute top-[3%] left-[3%] bg-secondary py-1 px-2 text-white text-xs rounded-sm z-10">
          {discount}% OFF
        </div>
      ) : (
        <Fragment />
      )}
    </Link>
  );
};

export default CardProduct;
