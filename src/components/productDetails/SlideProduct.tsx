import { Divider, Image } from '@nextui-org/react'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

interface SlideProductProps {
    title: string
    products: { image: string }[]
    infinite?: boolean
    autoplay?: boolean
}

const SlideProduct: React.FC<SlideProductProps> = ({ title, products, infinite = false, autoplay = false }) => {
    const settings = {
        infinite: infinite,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,
        autoplay: autoplay,

        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    infinite: infinite,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500,
                    autoplay: autoplay
                }
            },
            {
                breakpoint: 900,
                settings: {
                    infinite: infinite,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500,
                    autoplay: autoplay
                }
            },
        ]
    };

    return (
        <div className="flex flex-col gap-8" id='seen-products'>
            <div className="flex justify-center items-center gap-3">
                <div className="font-bold text-xl text-nowrap">{title}</div>
                <Divider className="bg-black flex-1" />
            </div>

            <Slider {...settings}>
                {products.map((product, index) => (
                    <div className="flex flex-1 justify-between flex-col gap-4 p-4" key={index}>
                        <div className="flex justify-center items-center overflow-hidden sm:h-[280px] ">
                            <Image src={product.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className='font-bold text-xs sm:text-base py-2'>Ba chỉ bò nhập khẩu đông lạnh Trust Farm (khay 300g) </div>
                        <div className="flex flex-row justify-start items-center gap-3">
                            <div className="text-xs sm:text-xl font-extrabold text-[#F01919] text-nowrap">
                                499.000 đ
                            </div>
                            <div className="flex flex-col text-[8px] sm:text-xs">
                                <div className="text-[#666666] line-through">529.000 đ</div>
                                <div className=" text-[#F01919]">Khuyến mại 10%</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SlideProduct