'use client';
import { useState, useEffect } from 'react';
import BreadcrumbNav from '../common/BreadcrumbNav';
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import axios from 'axios';
import Link from 'next/link';

import { DIEMBAN } from '@/data';

// Define types for API data
interface Province {
    code: string;
    name: string;
    districts: District[];
}

interface District {
    code: string;
    name: string;
    wards: Ward[];
}

interface Ward {
    code: string;
    name: string;
}

const Body_Dangkibanhang = () => {
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=1')
            .then(response => {
                setProvinces(response.data);
            });
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then(response => {
                    setDistricts(response.data.districts);
                });
        }
    }, [selectedProvince]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <div className="py-5 h-[62px]">
                <BreadcrumbNav
                    items={[
                        { name: 'Trang chủ', link: '/' },
                        { name: 'Đăng kí bán hàng', link: '/#' }
                    ]}
                />
            </div>
            <div className='mt-7 mb-10'>
                <div className='uppercase font-bold text-4xl mb-3'>đăng ký đối tác điểm bán cùng vietinter food</div>
                <div className='font-normal text-base italic'>(*) Vui lòng điền đầy đủ thông tin vào bảng bên dưới để VF hỗ trợ - tư vấn nhanh nhất!</div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='mb-5'>
                            <div className='font-bold text-main text-lg mb-4'>
                                <PersonIcon /> Loại hình đăng kí
                            </div>
                            <Select
                                aria-label="Loại hình đăng kí"
                                size='lg'
                                variant='bordered'
                                startContent={<StoreMallDirectoryOutlinedIcon className='text-[#a1a1aa]' />}
                                placeholder='Đại lí cửa hàng'
                                className=""
                            >
                                {DIEMBAN.map((item, ind) => (
                                    <SelectItem key={ind}>
                                        {item.name}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>

                        <div className='mb-5'>
                            <div className='font-bold text-main text-lg mb-4'>
                                <PersonIcon /> Thông tin khách hàng đăng ký làm đại lý cá nhân
                            </div>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Họ và tên (<span className='text-red-600'>*</span>)</div>
                                    <Input
                                        aria-label="Họ và tên"
                                        size='lg'
                                        variant='bordered'
                                        required
                                        type="text"
                                        placeholder="Phạm Văn Quân"
                                        labelPlacement="outside"
                                        startContent={
                                            <PersonAddOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Email (<span className='text-red-600'>*</span>)</div>
                                    <Input
                                        aria-label="Email"
                                        size='lg'
                                        variant='bordered'
                                        required
                                        type="email"
                                        placeholder="you@example.com"
                                        labelPlacement="outside"
                                        startContent={
                                            <MarkEmailReadOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Điện thoại (<span className='text-red-600'>*</span>)</div>
                                    <Input
                                        aria-label="Điện thoại"
                                        size='lg'
                                        variant='bordered'
                                        required
                                        min={10}
                                        type="number"
                                        placeholder="0901 11 22 33"
                                        labelPlacement="outside"
                                        startContent={
                                            <PhoneInTalkOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Số chứng minh nhân dân/thẻ căn cước công dân (<span className='text-red-600'>*</span>)</div>
                                    <Input
                                        aria-label="Số chứng minh nhân dân/thẻ căn cước công dân"
                                        size='lg'
                                        variant='bordered'
                                        required
                                        type="text"
                                        placeholder="15464654654"
                                        labelPlacement="outside"
                                        startContent={
                                            <ContactEmergencyOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Mã số thuế cá nhân: </div>
                                    <Input
                                        aria-label="Mã số thuế cá nhân"
                                        size='lg'
                                        variant='bordered'
                                        type="text"
                                        placeholder="15464654654"
                                        labelPlacement="outside"
                                        startContent={
                                            <ContactEmergencyOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <div>
                                <div className='font-bold text-main text-lg mb-4'>
                                    <AccountBalanceIcon /> Thông tin ngân hàng
                                </div>
                                <div className='font-normal text-sm italic mb-4'>
                                    Đây là thông tin quan trọng giúp Công ty thanh toán cho Khách hàng Đại lý cá nhân (Vui lòng cung cấp thông tin tài khoản ngân hàng trong vòng 15 ngày nếu chưa có thông tin khi đăng ký)
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Họ và tên chủ tài khoản</div>
                                    <Input
                                        aria-label="Họ và tên chủ tài khoản"
                                        size='lg'
                                        variant='bordered'
                                        type="text"
                                        placeholder="Phạm Văn Quân"
                                        labelPlacement="outside"
                                        startContent={
                                            <AccountCircleOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Số tài khoản</div>
                                    <Input
                                        aria-label="Số tài khoản"
                                        size='lg'
                                        variant='bordered'
                                        type="number"
                                        placeholder="3432432 4"
                                        labelPlacement="outside"
                                        startContent={
                                            <CreditCardOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>
                                        Tên ngân hàng
                                    </div>
                                    <Select
                                        aria-label=""

                                        variant='bordered'
                                        size='lg'
                                        startContent={<AccountBalanceOutlinedIcon className='text-[#a1a1aa]' />}
                                        placeholder='Tên ngân hàng'
                                        className=""
                                    >
                                        {DIEMBAN.map((item, ind) => (
                                            <SelectItem key={ind}>
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Chi nhánh</div>
                                    <Input
                                        aria-label="Chi nhánh"
                                        size='lg'
                                        variant='bordered'
                                        type="text"
                                        placeholder="MB Bank"
                                        labelPlacement="outside"
                                        startContent={
                                            <AccountBalanceOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>

                                <div>
                                </div>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <div className='font-bold text-main text-lg mb-4'>
                                <AddLocationAltIcon /> Thông tin địa điểm
                            </div>
                            <div className='font-normal text-sm italic mb-4'>
                                Đây là thông tin quan trọng giúp Công ty kết nối Khách hàng với Đại lý, đối tác bán hàng gần nhất (Vui lòng cập nhật chính xác)
                            </div>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Tỉnh/Thành phố (<span className='text-red-600'>*</span>)</div>
                                    <Select
                                        placeholder='Tỉnh/Thành phố'
                                        aria-label="Tỉnh/Thành phố"
                                        size='lg'
                                        variant='bordered'
                                        onChange={(e) => setSelectedProvince(e.target.value)}
                                        startContent={<LocationOnOutlinedIcon className='text-[#a1a1aa]' />}
                                    >
                                        {provinces.map((province, index) => (
                                            <SelectItem key={index} value={province.code}>
                                                {province.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Quận/Huyện (<span className='text-red-600'>*</span>)</div>
                                    <Select
                                        placeholder='Quận/Huyện'
                                        aria-label="Quận/Huyện"
                                        size='lg'
                                        variant='bordered'
                                        isDisabled={!selectedProvince}
                                        onChange={(e) => setSelectedDistrict(e.target.value)}
                                        startContent={<LocationOnOutlinedIcon className='text-[#a1a1aa]' />}
                                    >
                                        {districts.map((district, index) => (
                                            <SelectItem key={index} value={district.code}>
                                                {district.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <div>
                                    <div className='font-semibold text-base mb-2'>Phường/Xã (<span className='text-red-600'>*</span>)</div>
                                    <Select
                                        placeholder='Phường/Xã'
                                        aria-label="Phường/Xã"
                                        size='lg'
                                        variant='bordered'
                                        isDisabled={!selectedDistrict}
                                        startContent={<LocationOnOutlinedIcon className='text-[#a1a1aa]' />}
                                    >
                                        {wards.map((ward, index) => (
                                            <SelectItem key={index} value={ward.code}>
                                                {ward.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <div className='font-bold text-main text-lg mb-4'>
                                <FactCheckIcon /> Chính sách quy định chung
                            </div>
                            <div>
                                <Checkbox
                                    aria-label="Đồng ý với các điều khoản và điều kiện"
                                    size='lg'
                                    color='primary'
                                    defaultSelected
                                >
                                    Tôi đã đọc và đồng ý với các điều khoản và điều kiện chung của VF
                                </Checkbox>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                            <div>
                                <Button type='submit' size='lg' className='w-full font-semibold text-base text-white bg-main'>
                                    Xác nhận đăng kí
                                </Button>
                            </div>
                            <div>
                                <Button size='lg' className='w-full font-semibold text-base text-red-600 border-red-600' variant='bordered'>
                                    Hủy
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Body_Dangkibanhang;
