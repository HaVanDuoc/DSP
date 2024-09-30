import { PlusCircle } from "@/config/icons";
import { AddressProps } from "@/models";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

const AddAddressButton = ({
  address,
  setAddress,
}: {
  address: AddressProps[];
  setAddress: (address: AddressProps[]) => void;
}) => {
  const [fullName, setFullName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isDefault, setDefault] = useState(false);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const onConfirm = () => {
    let updatedAddress = address;

    // Chỉ tồn tại một mặc định nên phải xóa mặc định cũ đi
    if (isDefault) {
      const updateAddress = address.map((addr) => ({
        ...addr,
        addressDefault: false,
      }));

      setAddress(updateAddress);
    }

    setAddress([
      ...updatedAddress,
      {
        fullName,
        address: newAddress,
        phone,
        addressDefault: isDefault,
      },
    ]);

    onCancel();
  };

  const onCancel = () => {
    // Reset state
    setFullName("");
    setNewAddress("");
    setPhone("");
    setDefault(false);
    onClose(); // Đóng modal add
  };

  return (
    <React.Fragment>
      <div
        onClick={onOpen}
        className="flex flex-col justify-center items-center gap-2 w-full sm:p-4 p-3 rounded cursor-pointer shadow-[0_0_5px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.2)] transition-shadow"
      >
        <PlusCircle size={30} />
        <div className="font-bold">Thêm địa chỉ</div>
      </div>

      {/* Modal add address */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Địa chỉ mới</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              value={fullName}
              label="Họ tên"
              placeholder=""
              labelPlacement="outside"
              variant="bordered"
              onChange={(e: any) => setFullName(e.target.value)}
            />
            <Input
              value={newAddress}
              onChange={(e: any) => setNewAddress(e.target.value)}
              label="Địa chỉ"
              placeholder=""
              labelPlacement="outside"
              variant="bordered"
            />
            <Input
              value={phone}
              onChange={(e: any) => setPhone(e.target.value)}
              label="Số điện thoại"
              placeholder=""
              labelPlacement="outside"
              variant="bordered"
            />

            <Checkbox
              isSelected={isDefault}
              onChange={(e: any) => setDefault(e.target.checked)}
              classNames={{ label: "text-small" }}
            >
              Đặt làm địa chỉ mặc định
            </Checkbox>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onCancel}>
              Hủy
            </Button>
            <Button color="primary" onPress={onConfirm}>
              Thêm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default AddAddressButton;
