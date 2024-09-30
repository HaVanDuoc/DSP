'use client';
import { useState } from 'react';
import BreadcrumbNav from '../common/BreadcrumbNav';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { toast } from 'react-toastify';

function Body_Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handle_send = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        toast.success('Gửi thành công !!!')
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <div className="py-5 h-[62px]">
                <BreadcrumbNav
                    items={[
                        { name: 'Trang chủ', link: '/' },
                        { name: 'Liên hệ', link: '#' },
                    ]}
                />
            </div>

            <div className='flex flex-col lg:flex-row gap-20 mb-20'>
                <div className='w-full lg:w-3/5'>
                    <div className='text-3xl font-bold mb-2'>Liên hệ</div>
                    <div className='text-base font-light mb-8'>Để lại tin nhắn cho chúng tôi</div>
                    <div>
                        <form className="bg-white rounded-lg w-full" onSubmit={handle_send}>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="md:col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="name">
                                        Họ và tên <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                    required
                                        type="text"
                                        id="name"
                                        placeholder="Vui lòng nhập"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="email">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                    required
                                        type="email"
                                        id="email"
                                        placeholder="Vui lòng nhập"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="phone">
                                        Số điện thoại
                                    </label>
                                    <input
                                    required
                                        type="text"
                                        id="phone"
                                        placeholder="Vui lòng nhập"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="message">
                                    Nội dung <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                required
                                    id="message"
                                    placeholder="Vui lòng nhập"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                                ></textarea>
                            </div>

                            <div className="flex items-center mt-6">
                                <button
                                    type="submit"
                                    className="bg-main hover:bg-yellow-600 text-white font-bold py-4 px-20 rounded-full focus:outline-none focus:shadow-outline w-auto"
                                >
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='bg-gray-100 p-5 flex flex-col gap-5'>
                        <div className='uppercase text-xl font-semibold text-center'>CÔNG TY TNHH PHÁT TRIỂN VIỆT QUỐC TẾ</div>
                        <div className='flex items-center gap-3'>
                            <div><LocationOnIcon /></div>
                            <div className='flex flex-col gap-2 te'>
                                <div className='text-base font-bold'>Địa chỉ: </div>
                                <div className='text-sm font-light'>Tầng 1 - Phòng 102, 11 Bis Nguyễn Gia Thiều, Phường Võ Thị Sáu, Quận 3, TP.HCM</div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div><LocalPhoneIcon /></div>
                            <div className='flex flex-col gap-2 te'>
                                <div className='text-base font-bold'>Hotline: </div>
                                <div className='text-sm font-light'>0326 482 490</div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div><AccessTimeIcon /></div>
                            <div className='flex flex-col gap-2 te'>
                                <div className='text-base font-bold'>Giờ hoạt động: </div>
                                <div className='text-sm font-light'>08:00 - 17:00</div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div><EmailOutlinedIcon /></div>
                            <div className='flex flex-col gap-2 te'>
                                <div className='text-base font-bold'>E-mail: </div>
                                <div className='text-sm font-light'>
                                    <a href="mailto:info@vietintergroup.com" className="text-blue-500 hover:underline">
                                        info@vietintergroup.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-20'>
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
    );
}

export default Body_Contact;
