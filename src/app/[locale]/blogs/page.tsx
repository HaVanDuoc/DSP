"use client"

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BLOG } from "@/data";
import appConfig from "@/config/appConfig";
import { useParams } from "next/navigation";
import BreadcrumbNav from "@/components/common/BreadcrumbNav";
import BlogBox from "@/components/blog/BlogBox";

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const BlogPage = () => {
  const latestBlog = BLOG.sort(
    (a, b) =>
      new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
  )[0];
  const { locale: locale } = useParams();

  return (
    <div>
      <div className="py-5 h-[62px] max-w-screen-xl mx-auto px-4">
        <BreadcrumbNav
          items={[
            { name: "Trang chủ", link: "/" },
            { name: "Tin tức", link: "#" },
          ]}
        />
      </div>

      {/* Blog mới nhất */}
      <div className="mt-5 max-w-screen-xl mx-auto px-4">
        <div className="uppercase text-center font-bold text-2xl lg:text-4xl mb-10">
          Tin mới nhất
        </div>
        <div className="flex gap-10 lg:flex-row flex-col">
          <div className="w-full lg:w-3/5">
            <img
              src={latestBlog.img}
              className="w-full lg:h-[400px] md:h-[300px] h-[220px] object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="font-normal text-base text-[#404040] mb-2">
              #tag
            </div>
            <div className="font-medium text-2xl mb-4">
              {truncateText(latestBlog.name, 50)}
            </div>
            <div className="font-normal text-base text-[#404040] mb-10">
              {truncateText(latestBlog.description, 150)}
            </div>
            <div>
              <Link
                href={`/${locale}/${appConfig.path.blogs}/${latestBlog.id}`}
              >
                <Button className="rounded bg-transparent border border-black px-10">
                  Xem thêm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog xem nhiều */}
      <div className="my-20 max-w-screen-xl mx-auto px-4">
        <div className="flex items-center mb-6">
          <span className="font-bold text-2xl">Tin Xem Nhiều Nhất</span>
          <div className="flex-grow border-t border-black ml-4" />
        </div>
        <div>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 1024: { slidesPerView: 3, spaceBetween: 20 } }}
          >
            {BLOG.map((store) => (
              <SwiperSlide key={store.id}>
                <BlogBox store={store} variant="light" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Blog*/}
      <div className="w-full h-auto bg-[#32312f] text-white pb-20">
        <div className="max-w-screen-xl mx-auto px-4 text-white py-10 lg:py-[60px]">
          <div className="flex items-center mb-6">
            <span className="font-bold text-xl">Feature News</span>
            <div className="flex-grow border-t border-white ml-4" />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 relative">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 1024: { slidesPerView: 3, spaceBetween: 20 } }}
            className="pb-[50px]"
          >
            {BLOG.map((store) => (
              <SwiperSlide key={store.id}>
                <BlogBox store={store} variant="dark" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Blog khác */}
      <div className="my-20 max-w-screen-xl mx-auto lg:px-0 px-4">
        <div className="flex items-center mb-6">
          <span className="font-bold text-2xl">Các tin khác</span>
          <div className="flex-grow border-t border-black ml-4" />
        </div>
        <div>
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {BLOG.slice(0, 6).map((store, index) => (
              <div key={index} className="bg-white rounded-lg">
                <BlogBox store={store} variant="light" />
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <Swiper
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
            >
              {BLOG.map((store, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg">
                    <BlogBox store={store} variant="light" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
