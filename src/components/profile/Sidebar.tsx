"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Avatar } from "@nextui-org/react";
import { NAV_PROFILE } from "@/data/profile/sidebar";

const Sidebar = () => {
  const { locale } = useParams();
  const currentPath = usePathname();

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div>
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-base font-normal">Tài khoản của</div>
          <div className="text-2xl font-medium">Nguyễn Hữu Tíến</div>
        </div>
      </div>

      <nav>
        {NAV_PROFILE.map((item, index) => {
          const href = `/${locale}/${item.href}`;

          return (
            <div className=" border-b border-black py-4" key={index}>
              <Link
                href={href}
                className={`flex items-center gap-4 ${
                  currentPath === href ? "text-main font-bold" : ""
                }`}
              >
                {item.startContent}
                <div>{item.name}</div>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
