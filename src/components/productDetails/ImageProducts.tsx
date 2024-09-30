"use client"

import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/react";
import './styles.css'

interface ImageProductsProps {
  imgDemo: string[];
}

const ImageProducts: React.FC<ImageProductsProps> = ({ imgDemo }) => {

  const settings = {
    customPaging: function (i: any) {
      return (
        <a className="flex w-auto h-auto p-2 md:p-3"><img src={imgDemo[i]} className={"w-[12vw] md:w-[80px]"} /></a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="flex w-full lg:w-[50vw] lg:max-w-[600px] justify-center items-center pb-10">
      <div id="demo-images" className="w-full h-auto">
        <Slider {...settings} >
          {imgDemo && imgDemo.length > 0 ? (
            imgDemo.map((img, index) => (
              <div key={index}>
                <Image
                  src={img}
                  alt={"sdlfjsdkflj"}
                  className="w-full h-auto object-fill"
                />
              </div>
            ))
          ) : (
            <Fragment />
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ImageProducts;
