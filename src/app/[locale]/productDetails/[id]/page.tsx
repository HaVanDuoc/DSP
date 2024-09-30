"use client"

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProductProps } from "@/models";
import { DUMP_PRODUCTS } from "@/data";
import SeenProducts, { saveSeenProductToLocalStorage } from "@/components/productDetails/SeenProducts";
import InfoProduct from "@/components/productDetails/InfoProduct";
import ImageProducts from "@/components/productDetails/ImageProducts";
import TabsInfo from "@/components/productDetails/TabsInfo";
import SlideProduct from "@/components/productDetails/SlideProduct";
import AppContainer from "@/components/common/AppContainer";
import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";

const ProductDetailPage = () => {
  const { id: id_product } = useParams(); // get id product
  const [product, setProduct] = useState<ProductProps | null>(null);
  const image = product?.image || "";

  useEffect(() => {
    if (id_product) {
      const data_product = DUMP_PRODUCTS.filter(
        (product) => product.id === Number(id_product)
      )[0];
      saveSeenProductToLocalStorage(data_product); // Save product to Local Storage
      setProduct(data_product);
    }
  }, [id_product]);

  const BREADCRUMBS = [
    { name: "Trang chủ", href: "/", },
    { name: "Sản phẩm", href: "/ListProudct", },
    { name: product?.name || "", href: "#", },
  ];

  return (
    <AppContainer>
      <div className="flex flex-col">
        <AppBreadcrumbs items={BREADCRUMBS} />

        <div className="flex flex-col lg:flex-row xl:py-10 py-[4vw] text-black gap-[3vw]">
          <div className="flex flex-1 order-2 lg:order-1 ">
            <InfoProduct />
          </div>

          <div className="flex flex-col flex-1 order-1 lg:order-2">
            <ImageProducts imgDemo={[image, image, image, image]} />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 md:py-12 py-[7vw]">
          {product ? <TabsInfo product={product} /> : <Fragment />}

          <SlideProduct
            title="Sản phẩm tương tự"
            products={PRODUCTS_1}
            infinite={true}
            autoplay={true}
          />

          <SeenProducts />
        </div>
      </div>
    </AppContainer>
  );
};

export default ProductDetailPage;

const PRODUCTS_1 = [
  { image: "/images/4b34ae3a5d4a751f81bae28d6ffdd8c4.png" },
  { image: "/images/3f45465c7e35bbbd6cd41f33565d6983.png" },
  { image: "/images/fa8590dc69532b7576a8d9f00b2edbae.png" },
  { image: "/images/982d3af1843b6afb7a7336f15608949c.png" },
  { image: "/images/3f45465c7e35bbbd6cd41f33565d6983.png" },
  { image: "/images/982d3af1843b6afb7a7336f15608949c.png" },
  { image: "/images/982d3af1843b6afb7a7336f15608949c.png" },
  { image: "/images/982d3af1843b6afb7a7336f15608949c.png" },
  { image: "/images/982d3af1843b6afb7a7336f15608949c.png" },
  { image: "/images/982d3af1843b6afb7a7336f15608949c.png" },
];

