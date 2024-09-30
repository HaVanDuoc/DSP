"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SectionBannerGrid() {
    const images = [
        "/images/1b27ca018ff368d42b4b6cb4a4c36579.jpg",
        "/images/1471066b6b22a24056639f88484fbedb.jpg",
        "/images/b3ce2a8888d7cc586dd63a370e5ec597.jpg"
    ];

    return (
        <div className="max-w-screen-xl mx-auto my-0 mb-1 lg:my-[10px] px-4 mt-2 h-auto">
            {/* Mobile */}
            <div className="block lg:hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    className="lg:h-[240px] pb-0"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                <img
                                    src={src}
                                    alt={`Banner ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-2 gap-1 h-auto">
                <div className="col-span-2 row-span-2 relative" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src="/images/1b27ca018ff368d42b4b6cb4a4c36579.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="col-start-3 relative" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src="/images/1471066b6b22a24056639f88484fbedb.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="col-start-3 row-start-2 relative" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src="/images/b3ce2a8888d7cc586dd63a370e5ec597.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionBannerGrid;
