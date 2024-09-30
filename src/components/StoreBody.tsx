'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import BreadcrumbNav from './common/BreadcrumbNav';
import { Chip } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

// Define the types for the data and local arrays
interface Store {
  id: number;
  name: string;
  address: string;
  time: string;
  tag: string;
  img: string;
}

interface Animal {
  label: string;
}

interface Local {
  name: string;
  address: string;
}

const data: Store[] = [
  {
    id: 1,
    name: 'Nam hải Đăng',
    address: '239 Trung lực, Đằng Lâm, Hải An, Hải Phòng, Đằng Lâm, Hải An, Hải Phòng',
    time: '8:00 am - 17:00 pm',
    tag: '#Cửa hàng',
    img: '/images/st-1.jpg'
  },
  {
    id: 2,
    name: 'Winmart Hải Phòng',
    address: '239 Trung lực, Đằng Lâm, Hải An, Hải Phòng, Đằng Lâm, Hải An, Hải Phòng',
    time: '8:00 am - 17:00 pm',
    tag: '#Siêu thị',
    img: '/images/st-2.jpg'
  },
  {
    id: 3,
    name: 'Cửa Hàng Út',
    address: '239 Trung lực, Đằng Lâm, Hải An, Hải Phòng, Đằng Lâm, Hải An, Hải Phòng',
    time: '8:00 am - 17:00 pm',
    tag: '#Cửa hàng',
    img: '/images/st-3.jpg'
  },
];

const animals: Animal[] = [
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
];

const local: Local[] = [
  {
    name: 'Quốc Tịnh',
    address: ' ĐT626, Nghĩa Hà, Tp. Quảng Ngãi, Quảng Ngãi, Vietnam, Xã Nghĩa Hà, Thành phố Quảng Ngãi, Quảng Ngãi '
  },
  {
    name: 'Quốc Tịnh',
    address: ' ĐT626, Nghĩa Hà, Tp. Quảng Ngãi, Quảng Ngãi, Vietnam, Xã Nghĩa Hà, Thành phố Quảng Ngãi, Quảng Ngãi '
  },
  {
    name: 'Quốc Tịnh',
    address: ' ĐT626, Nghĩa Hà, Tp. Quảng Ngãi, Quảng Ngãi, Vietnam, Xã Nghĩa Hà, Thành phố Quảng Ngãi, Quảng Ngãi '
  },
];

interface BoxProps {
  store: Store;
}

const Box = ({ store }: BoxProps) => (
  <div className="bg-white rounded-lg">
    <img src={store.img} alt={store.name} className="w-full h-[300px] object-cover rounded-t-lg" />
    <div className="pt-5">
      <h2 className="text-xl font-medium">{store.name}</h2>
      <p className="mt-2 text-base mb-2">{store.address}</p>
      <p className="mt-2 text-gray-400 mb-3">Time: {store.time}</p>
      <div>
        <Chip>{store.tag}</Chip>
      </div>
    </div>
  </div>
);

function StoreBody() {
  return (
    <div className="max-w-screen-xl mx-auto h-auto px-4">
      <div className="py-5 h-[62px]">
        <BreadcrumbNav
          items={[
            { name: 'Trang chủ', link: '/' },
            { name: 'Điểm bán - cửa hàng', link: '#' },
          ]}
        />
      </div>
      <div className='mt-5'>
        <div className='font-bold text-2xl lg:text-4xl uppercase text-center'>
          Hệ thống ĐIỂM BÁN - cửa hàng của VIETINTER FOODS
        </div>
        <div className='mt-5'>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((store) => (
              <SwiperSlide key={store.id}>
                <Box store={store} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='mt-20 pt-6 mb-20'>
        <div className='font-bold text-2xl lg:text-4xl uppercase text-center'>Tìm kiếm nhanh</div>
        <div className='mt-8'>
          <div className='flex gap-10 lg:flex-row flex-col-reverse'>
            <div className='lg:w-1/2 w-full'>
              <div className='font-medium lg:text-3xl text-xl mb-4'>Danh sách cửa hàng</div>
              <div className='flex gap-3 w-full mb-3'>
                <div className='w-1/3'>
                  <Select
                    variant='bordered'
                    label="Chọn"
                    className="max-w-xs"
                  >
                    {animals.map((animal, index) => (
                      <SelectItem key={index}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className='w-1/3'>
                  <Select
                    variant='bordered'
                    label="Chọn"
                    className="max-w-xs"
                  >
                    {animals.map((animal, index) => (
                      <SelectItem key={index}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className='w-1/3'>
                  <Select
                    variant='bordered'
                    label="Chọn"
                    className="max-w-xs"
                  >
                    {animals.map((animal, index) => (
                      <SelectItem key={index}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="">
                {local.map((lo, index) => (
                  <div key={index} className="mb-8 pt-3 border-t-1 border-black text-sm">
                    <li className="font-medium text-lg list-disc list-inside">{lo.name}</li>
                    <div className="pl-6 mt-1 text-gray-600">
                      Địa chỉ: {lo.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='lg:w-1/2 w-full'>
              <div className='relative w-full h-full pb-[56.25%]'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12560.985700727551!2d106.63693454319744!3d10.845215489336937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723784461239!5m2!1sen!2s"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreBody;
