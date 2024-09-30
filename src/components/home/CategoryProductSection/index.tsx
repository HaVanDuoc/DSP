"use client";

import React from "react";
import HeadTitle from "../TitleSection/HeadTitle";
import IMG_CATEGORY_COMPUTER from "@/assets/img/category/category1.png";
import IMG_CATEGORY_SMARTPHONE from "@/assets/img/category/category2.png";
import IMG_CATEGORY_HEADPHONE from "@/assets/img/category/category3.png";
import IMG_CATEGORY_ACCESSORIES from "@/assets/img/category/category4.png";
import IMG_CATEGORY_CAMERA from "@/assets/img/category/category5.png";
import IMG_CATEGORY_TV from "@/assets/img/category/category6.png";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationHover from "@/components/animation/AnimationHover";

const CATEGORY = [
  { id: 1, label: "Computer & Laptop", img: IMG_CATEGORY_COMPUTER },
  { id: 2, label: "SmartPhone", img: IMG_CATEGORY_SMARTPHONE },
  { id: 3, label: "Headphones", img: IMG_CATEGORY_HEADPHONE },
  { id: 4, label: "Accessories", img: IMG_CATEGORY_ACCESSORIES },
  { id: 5, label: "Camera & Photo", img: IMG_CATEGORY_CAMERA },
  { id: 6, label: "TV & Homes", img: IMG_CATEGORY_TV },
  { id: 7, label: "TV & Homes", img: IMG_CATEGORY_TV },
  { id: 8, label: "TV & Homes", img: IMG_CATEGORY_TV },
  { id: 9, label: "TV & Homes", img: IMG_CATEGORY_TV },
];

const CategoryProductSection = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 w-full items-center">
      <HeadTitle title="Danh mục sản phẩm" />

      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="w-full"
      >
        {CATEGORY.map((category) => {
          const { id, img, label } = category;

          return (
            <SwiperSlide key={id}>
              <div className="flex flex-col gap-3 items-center justify-between group">
                <AnimationHover>
                  <div className="flex items-center justify-center w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] px-5">
                    <Image
                      src={img.src}
                      alt={`Hình ảnh minh họa danh mục sản phẩm ${label}`}
                      width={img.width}
                      height={img.height}
                      className="w-auto h-auto max-h-full"
                    />
                  </div>
                </AnimationHover>

                <div className="text-xs sm:text-sm text-black text-center group-hover:text-main group-hover:scale-110 transform transition-transform ease-in-out">
                  {label}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryProductSection;
