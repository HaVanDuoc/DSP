import { ProductProps } from "@/models";
import React, { Fragment } from "react";
import CardProduct from "./CardProduct";

interface ListSectionProductProps {
  products: ProductProps[];
  count: number; // số lượng sản phẩm hiển thị
}

const ListSectionProducts: React.FC<ListSectionProductProps> = ({
  products = [],
  count,
}) => {
  const gridClasses = `grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-t-1 border-l-1`;

  return products.length > 0 ? (
    <div className={gridClasses}>
      {products?.slice(0, count)?.map((product, index) => {
        const { id, name, image, price, discount = 0 } = product;

        return (
          <CardProduct id={id} name={name} image={image} price={price} discount={discount} key={index} />
        );
      })}
    </div>
  ) : (
    <Fragment />
  );
};

export default ListSectionProducts;
