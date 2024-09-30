import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Unlock } from "@/config/icons";

const SecuritySection = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="text-base font-bold">Bảo mật</div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-y-2 gap-x-6">
        <div className="flex flex-row gap-4 items-center">
          <Unlock size={18} />
          <div className="font-bold text-nowrap">Đổi mật khẩu</div>
        </div>
        <Button
          variant="bordered"
          size="sm"
          className="w-[110px] justify-self-end  border-black font-bold"
          onClick={onOpen}
        >
          Cập nhật
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            <ModalHeader>Đổi mật khẩu</ModalHeader>
            <ModalBody>
              <Input
                fullWidth
                label="Nhập mật khẩu mới"
                aria-label="reset-password"
                variant="bordered"
                size="sm"
                // className="hidden sm:block"
              />
              <Input
                fullWidth
                label="Nhập lại mật khẩu"
                aria-label="confirm-password"
                variant="bordered"
                size="sm"
                // className="hidden sm:block"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Hủy
              </Button>
              <Button type="submit" color="primary" onPress={onClose}>
                Chỉnh sửa
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default SecuritySection;
