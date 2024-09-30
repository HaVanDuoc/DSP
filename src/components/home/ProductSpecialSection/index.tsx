"use client";

import React, { Fragment } from "react";
import { Image, Tab, Tabs } from "@nextui-org/react";
import { ProductProps } from "@/models";
import CardProduct from "../../common/products/CardProduct";
import HeadTitle from "../TitleSection/HeadTitle";
import RedirectTitle from "../TitleSection/RedirectTitle";
import { ITitleSection } from "@/models/titleSection/titleSection";
import TitleContainer from "../TitleSection/TitleContainer";

export interface ProductSpecialSectionProps {
  products: ProductProps[];
  reverse?: boolean;
  banners?: { srcImg: string; href: string }[];
}

const BannerSection = ({
  banners = [],
}: {
  banners: ProductSpecialSectionProps["banners"];
}) => {
  return (
    <div className="hidden xl:flex flex-col w-[713px]">
      <div className="flex flex-col gap-5">
        {banners.length > 0 ? (
          <div className="flex flex-col justify-center items-center gap-5 w-full h-auto">
            {banners.map((banner, index) => {
              return (
                <Image
                  src={banner.srcImg}
                  alt="banner-product-special-1"
                  className="rounded-none w-full h-full object-fit"
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  );
};

const ListProducts = ({
  products = [],
}: {
  products: ProductSpecialSectionProps["products"];
}) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t-1 border-l-1`}
    >
      {products?.slice(0, 8)?.map((product, index) => {
        const { id, name, image, price, discount = 0 } = product;

        return (
          <CardProduct
            id={id}
            name={name}
            image={image}
            price={price}
            discount={discount}
            key={index}
          />
        );
      })}
    </div>
  );
};

const ProductSpecialSection: React.FC<
  ProductSpecialSectionProps & ITitleSection
> = ({ products, title, redirectMore = "", reverse = false, banners = [] }) => {
  const [selected, setSelected] = React.useState("All Products");

  const categories = products
    .map((product) => product.category) // Lấy tất cả category
    .filter((category, index, self) => self.indexOf(category) === index); // Lọc các giá trị trùng lặp
  categories.unshift("All Products"); // Thêm "All Products" vào đầu danh sách

  // Filter sản phẩm theo danh mục
  const show =
    selected === "All Products"
      ? products
      : products.filter((products) => products.category === selected);

  const reverseClassnames = reverse ? "flex-row-reverse" : "flex-row";

  return (
    <div className={`flex gap-5 ${reverseClassnames}`}>
      <div className="flex flex-col">
        <TitleContainer
          startContent={<HeadTitle title={title} />}
          centerContent={
            // Tabs
            <div className="order-3 lg:order-2 overflow-x-auto flex w-[calc(100vw-30px)] lg:w-auto -translate-x-[14px]">
              <Tabs
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(String(key))}
                variant="underlined"
                id="tabs-product-special"
              >
                {categories?.map((category) => {
                  return <Tab key={category} title={category} />;
                })}
              </Tabs>
            </div>
          }
          endContent={<RedirectTitle href={redirectMore} />}
        />

        <ListProducts products={show} />
      </div>

      <BannerSection banners={banners} />
    </div>
  );
};

export default ProductSpecialSection;
