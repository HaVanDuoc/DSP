"use client";

import { DUMP_NEWS, DUMP_PRODUCTS } from "@/data";
import { Fragment } from "react";
import FlashSales from "@/components/home/FlashSaleSection";
import ProductSpecialSection from "@/components/home/ProductSpecialSection";
import NewsSection from "@/components/home/NewsSection";
import ServiceSection from "@/components/home/ServiceSection";
import appConfig from "@/config/appConfig";
import SectionBannerGrid from "@/components/home/SectionBannerGrid";
import CategoryProductSection from "@/components/home/CategoryProductSection";
import IMG_BANNER_1 from "@/assets/img/banner/banner1.png";
import IMG_BANNER_2 from "@/assets/img/banner/banner2.png";
import IMG_BANNER_3 from "@/assets/img/banner/banner3.png";
import IMG_BANNER_4 from "@/assets/img/banner/banner4.jpg";
import IMG_BANNER_5 from "@/assets/img/banner/banner5.jpg";
import IMG_BANNER_6 from "@/assets/img/banner/banner6.jpg";
import Banner3Cols from "@/components/home/Banner3Cols";
import ChatBot from "@/components/chatbot";

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <Fragment>
      <SectionBannerGrid />
      <div className="max-w-screen-xl mx-auto px-4 h-auto">
        <Banner3Cols
          images={[IMG_BANNER_4, IMG_BANNER_5, IMG_BANNER_6]}
          spaceBetween={8}
        />
      </div>


      <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-[60px] py-[60px] sm:gap-[96px] sm:py-[96px] md:gap-[8vw] md:py-[8vw]">
        <FlashSales locale={locale} />
        <CategoryProductSection />

        {/* Sản phẩm nổi bậc */}
        <ProductSpecialSection
          title="Sản phẩm nổi bậc"
          redirectMore={`/${locale}/${appConfig.path.listProduct}`}
          banners={[
            {
              srcImg: "/images/e4627cf7b3b64add55a5ef57708a9257.jpg",
              href: "",
            },
          ]}
          reverse
          products={DUMP_PRODUCTS}
        />

        <Banner3Cols images={[IMG_BANNER_1, IMG_BANNER_2, IMG_BANNER_3]} />

        {/* Sản phẩm khuyến mãi */}
        <ProductSpecialSection
          title="Sản phẩm khuyến mãi"
          redirectMore={`/${locale}/${appConfig.path.listProduct}`}
          banners={[
            { srcImg: "/images/cap-02.jpg", href: "" },
            { srcImg: "/images/cap-1-05.jpg", href: "" },
          ]}
          products={DUMP_PRODUCTS}
        />

        <NewsSection locale={locale} newsData={DUMP_NEWS} />

        <ServiceSection />
      </div>
    </Fragment>
  );
}
