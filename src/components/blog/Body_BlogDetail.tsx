"use client";
import { useState, useEffect } from "react";
import BreadcrumbNav from "../common/BreadcrumbNav";
import { Button } from "@nextui-org/react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { BLOG } from "@/data";
import { Spinner } from "@nextui-org/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Store } from "@/models";
import { BoxProps } from "@/models";
import appConfig from "@/config/appConfig";
import { useParams } from "next/navigation";

export interface BlogDetailProps {
  id: string;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const Box = ({ store, variant }: BoxProps) => {
  const { locale } = useParams();

  return (
    <Link href={`/${locale}/${appConfig.path.blogs}/${store.id}`}>
      <div
        className={`rounded-lg group flex flex-col h-full min-h-[500px] hover:cursor-pointer ${
          variant === "dark" ? "bg-[#32312f] text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src={store.img}
            alt={store.name}
            className="w-full h-[300px] object-cover rounded-t-lg group-hover:scale-110 transition-all"
          />
        </div>
        <div className="pt-5 flex flex-col flex-grow">
          <h2 className="text-lg lg:text-xl font-medium h-auto lg:h-[100px] group-hover:text-main">
            {store.name}
          </h2>
          <p className="mt-2 text-sm lg:text-base mb-4 flex-grow h-[58px] lg:h-[75px]">
            {truncateText(store.description, 100)}
          </p>
          <div className="flex-1 flex w-full justify-start lg:justify-end">
            <Button
              className={`flex items-center border lg:border-none ${
                variant === "dark"
                  ? "bg-transparent text-white border-white"
                  : "bg-transparent text-black border-black"
              } lg:px-0 px-4`}
            >
              Xem thêm{" "}
              <span className="lg:block hidden">
                <ArrowForwardIosIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Body_BlogDetail({ id }: BlogDetailProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [blogData, setBlogData] = useState<Store | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const blogPost = BLOG.find((post) => post.id === parseInt(id));
    setBlogData(blogPost || null);
  }, [id]);

  if (!blogData) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div>
      <div className="py-5 h-[62px]">
        <BreadcrumbNav
          items={[
            { name: "Trang chủ", link: "/" },
            { name: "Tin tức", link: "/blog" },
            { name: `${blogData.name}`, link: "#" },
          ]}
        />
      </div>
      <div className="mt-8">
        <div className="text-center font-medium text-2xl lg:text-4xl">
          {blogData.name}
        </div>
        <div className="flex lg:gap-4 gap-2 justify-center w-full mt-4 font-normal text-[10px] lg:text-sm italic">
          <div>Ngày đăng: {blogData.date_created}</div>
          <div>Ngày cập nhật: {blogData.date_edit}</div>
        </div>
        <div className="mt-4">
          <p className="text-sm lg:text-lg text-gray-700 text-justify mb-4">
            {blogData.description}
          </p>
        </div>
        <div>
          <div className="container mx-auto py-8">
            <div className="flex flex-col gap-8">
              <div className="relative border rounded-lg p-4">
                <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-2 font-medium">
                  Nội dung bài viết
                </h2>
                <ul className="list-decimal list-inside space-y-2 mt-2">
                  {blogData.content.map((section, index) => (
                    <li key={index} className="text-main">
                      <a href={`#section-${index}`} className="hover:underline">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="">
                  {blogData.content.map((section, index) => (
                    <div
                      key={index}
                      className="mb-8 pt-4"
                      id={`section-${index}`}
                    >
                      <h2 className="text-xl lg:text-2xl font-bold mb-2">
                        {section.title}
                      </h2>
                      <p className="text-sm lg:text-[16px] text-gray-700 text-justify mb-4 font-medium">
                        {section.content_c}
                      </p>
                      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-2">
                        {section.img.map((imgObj, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={imgObj.img_c}
                            alt={`Image ${imgIndex}`}
                            className="w-full md:w-1/2 lg:w-1/2 object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center my-8 mt-10">
                  <h2 className="text-xl lg:text-4xl font-semibold mb-6">
                    Bạn Đánh Giá Bài Viết Này Như Nào?
                  </h2>
                  <div className="flex space-x-10 mb-6">
                    <div
                      className={`flex flex-col items-center cursor-pointer ${
                        selectedOption === "good"
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleOptionClick("good")}
                    >
                      <div className="text-4xl">
                        <SentimentSatisfiedAltIcon className="h-20 w-20" />
                      </div>
                      <p className="mt-2">Rất tốt</p>
                    </div>
                    <div
                      className={`flex flex-col items-center cursor-pointer ${
                        selectedOption === "improve"
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleOptionClick("improve")}
                    >
                      <div className="text-4xl">
                        <SentimentVeryDissatisfiedIcon className="h-20 w-20" />
                      </div>
                      <p className="mt-2">Cần cải thiện</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50 w-full max-w-lg">
                    <p className="mb-4">Cảm ơn bạn đã đánh giá bài viết</p>
                    <textarea
                      className="w-full border rounded-lg p-2 mb-4"
                      placeholder="Bạn có góp ý gì thêm không?"
                      rows={3}
                    ></textarea>
                    <div className="flex space-x-4 mb-4">
                      <select className="border p-2 rounded-lg w-full">
                        <option>Chọn giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                        <option>Khác</option>
                      </select>
                      <select className="border p-2 rounded-lg w-full">
                        <option>Chọn độ tuổi</option>
                        <option>Dưới 18</option>
                        <option>18-24</option>
                        <option>25-34</option>
                        <option>35-44</option>
                        <option>Trên 44</option>
                      </select>
                    </div>
                    <button className="bg-main text-white py-2 px-4 rounded-lg w-auto">
                      Gửi góp ý
                    </button>
                  </div>
                  <div className="w-px h-32 bg-black mt-8"></div>
                </div>

                <div className="mt-10 lg:mt-20">
                  <div className="capitalize text-2xl lg:text-4xl font-light text-center mb-6">
                    khám phá thêm nội dung dành cho bạn
                  </div>
                  <div>
                    <Swiper
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop
                      spaceBetween={30}
                      slidesPerView={1}
                      breakpoints={{
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      {BLOG.map((store) => (
                        <SwiperSlide key={store.id}>
                          <Box store={store} variant="light" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body_BlogDetail;
