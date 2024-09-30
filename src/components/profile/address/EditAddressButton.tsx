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

const EditAddressButton = ({
  address,
  setAddress,
  idx,
}: {
  address: AddressProps[];
  setAddress: (address: AddressProps[]) => void;
  idx: number;
}) => {
  // const [address, setAddress] = useState<AddressProps[]>(ADDRESS);
  const [fullName, setFullName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isDefault, setDefault] = useState(false);
  const [indexEdit, setIndexEdit] = useState<number | null>(null);

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onOpenChange: onOpenChangeEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const onCancel = () => {
    // Reset state
    setFullName("");
    setNewAddress("");
    setPhone("");
    setDefault(false);
    onCloseEdit(); // Đóng modal add
  };

  const onEdit = (index: number) => {
    setIndexEdit(index);
    setFullName(address[index].fullName);
    setNewAddress(address[index].address);
    setPhone(address[index].phone);
    setDefault(address[index].addressDefault);
    onOpenEdit();
  };

  const onConfirmEdit = () => {
    if (indexEdit !== null) {
      const updateAddress = [...address];

      // Nếu chọn default, duyệt qua addressDefault cho false hết
      if (isDefault) {
        updateAddress.forEach((addr) => {
          addr.addressDefault = false;
        });
      }

      // Sau đó update dữ liệu mới vào
      updateAddress[indexEdit] = {
        fullName,
        address: newAddress,
        phone,
        addressDefault: isDefault,
      };

      setAddress(updateAddress);

      onCancel();
    }
  };

  return (
    <React.Fragment>
      <div
        onClick={() => onEdit(idx)}
        className="text-xs md:text-sm cursor-pointer hover:underline"
      >
        Chỉnh sửa
      </div>

      {/* Modal edit address */}
      <Modal isOpen={isOpenEdit} onOpenChange={onOpenChangeEdit}>
        <ModalContent>
          <ModalHeader>Chỉnh sửa</ModalHeader>
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
            <Button color="primary" onPress={() => onConfirmEdit()}>
              Chỉnh sửa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default EditAddressButton;
