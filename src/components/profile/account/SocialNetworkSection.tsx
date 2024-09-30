import { Facebook } from "@/config/icons";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialNetworkSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="text-base font-bold">Liên kết mạng xã hội</div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-y-2 gap-x-6">
          <div className="flex flex-row gap-4 items-center">
            <Facebook size={18} color="dodgerblue" />
            <div className="font-bold text-nowrap">Facebook</div>
          </div>
          <Button
            variant="bordered"
            size="sm"
            className="w-[110px] justify-self-end  border-black font-bold"
          >
            Liên kết
          </Button>
        </div>
      </div>

      <Divider />

      {/* Đã liên kết */}
      <div className="flex flex-col gap-3">
        <div>Đã liên kết</div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-y-2 gap-x-6">
          <div className="flex flex-row gap-4 items-center">
            <FcGoogle size={22} />
            <div className="font-bold text-nowrap">Google</div>
          </div>
          <Button
            variant="bordered"
            size="sm"
            className="w-[110px] justify-self-end border-black font-bold"
          >
            Hủy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworkSection;
