import Image, { StaticImageData } from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

const Banner3Cols = ({
  images,
  spaceBetween = 20,
}: {
  images: StaticImageData[];
  spaceBetween?: SwiperProps["spaceBetween"];
}) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      navigation
      loop={true}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: spaceBetween,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: Number(spaceBetween) - 4,
        },
        521: {
          slidesPerView: 1,
        },
      }}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            width={img.width}
            height={img.height}
            src={img.src}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover aspect-video"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner3Cols;
