import { ADDRESS } from "@/data/profile/address";
import { AddressProps } from "@/models";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ReceiveInfo = () => {
  const [info, setInfo] = useState<AddressProps>();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const userAddress = ADDRESS[0];
    setInfo(userAddress);
  }, []);

  return (
    <div className="bg-gray-100 p-5 flex flex-col md:flex-row gap-2">
      <div className="flex flex-col flex-1 gap-3 justify-start items-start">
        <div className="font-semibold text-lg">Thông tin nhận hàng</div>
        <div className="flex flex-row gap-3 items-center text-sm">
          <div>{info?.fullName}</div>
          <Divider orientation="vertical" className="h-4 bg-black" />
          <div>{info?.phone}</div>
        </div>
      </div>

      <div className="flex flex-row-reserve md:flex-col flex-1 gap-3 justify-between md:justify-end items-end">
        <div
          className="order-2 md:order-1 cursor-pointer"
          onClick={() => onOpen()}
        >
          <Edit size={16} />
        </div>
        <div className="order-1 md:order-2 text-sm flex items-center">
          {info?.address}
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Chỉnh sửa
              </ModalHeader>
              <ModalBody>
                <Input
                  labelPlacement="outside"
                  label="Họ tên"
                  variant="bordered"
                />
                <Input
                  labelPlacement="outside"
                  label="Số điện thoại"
                  variant="bordered"
                />
                <Input
                  labelPlacement="outside"
                  label="Địa chỉ"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Hủy
                </Button>
                <Button color="primary" onPress={onClose}>
                  Chỉnh sửa
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReceiveInfo;

const Edit = ({ size = 24, color = "#000000" }) => (
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
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
  </svg>
);
