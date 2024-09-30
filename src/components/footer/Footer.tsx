import { Image } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  const MEDIA = [
    {
      id: 1,
      svgIcon: <Facebook />,
    },
    {
      id: 2,
      svgIcon: <Twitter />,
    },
    {
      id: 3,
      svgIcon: <Instagram />,
    },
    {
      id: 4,
      svgIcon: <Youtube />,
    },
  ];

  return (
    <div className="flex flex-col bg-[#1B1D21] text-white">
      <div className="py-[60px] px-7 max-w-screen-xl mx-auto">
        <div className="flex flex-1 flex-wrap justify-between items-start w-full gap-16">
          <div className="flex flex-col flex-start gap-5 lg:min-w-max">
            <div className="font-extrabold text-3xl">DSP.ONE</div>
            <div className="flex flex-col flex-start gap-2 text-sm">
              <div>
                434 Lien Phuong Street, Phuoc Long B Ward, District 9, HCMC,
                Vietnam
              </div>
              <div>
                <span className="font-bold">Email</span>: info@dspone.com
              </div>
              <div>
                <span className="font-bold">Hotline</span>: (+84) 985 909 720
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-5">
              {MEDIA?.map((media) => {
                const { id, svgIcon } = media;

                return (
                  <div
                    className="bg-white p-2 rounded-full border-none cursor-pointer"
                    key={id}
                  >
                    {svgIcon}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col flex-start gap-5 min-w-max ">
            <div className="font-bold">Về chúng tôi</div>
            <div className="flex flex-col gap-3 text-sm">
              <div>Life</div>
              <div>Business</div>
              <div>Travel</div>
              <div>Car</div>
              <div>Health</div>
            </div>
          </div>

          <div className="flex flex-col flex-start gap-5 min-w-max ">
            <div className="font-bold">Tải ứng dụng</div>
            <Image
              src="/images/App Store.png"
              alt="app-store"
              className="rounded-none"
            />
            <Image
              src="/images/Google Play.png"
              alt="google-play"
              className="rounded-none"
            />
          </div>

          <div className="flex flex-col flex-start gap-5 flex-1">
            <div className="font-bold">Đăng ký nhận tin</div>
            <div className="relative flex flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded bg-[rgba(255,255,255,0.25)] outline-none text-white py-4 px-5 flex-1"
              />
              <div className="absolute right-5 top-[50%] translate-y-[-50%]">
                <Mail />
              </div>
            </div>
            <div className="text-sm">
              Subscribe to our newsletter and unlock a world of exclusive
              benefits. Be the first to know about our latest products, special
              promotions, and exciting updates. Join our community of
              like-minded individuals who share a passion for [your
              niche/industry].
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-5 border-t-3 border-gray-500">
        © 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;

const Mail = ({ size = 24, color = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Facebook = ({ size = 18, color = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill={color}
  >
    {" "}
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = ({ size = 18, color = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const Instagram = ({ size = 18, color = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Youtube = ({ size = 18, color = "var(--main)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill={color}
  >
    <path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z" />
  </svg>
);
