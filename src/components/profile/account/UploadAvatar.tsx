import { IUser } from '@/models'
import { Avatar, Button, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

interface UploadAvatarProps {
    userId: IUser['id']
    avatar: IUser['avatar']
}

const UploadAvatar: React.FC<UploadAvatarProps> = ({ avatar, userId }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [preview, setPreview] = useState<string>(avatar ?? ""); // State for previewing the image
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // State for the selected file
    const inputRef = useRef<HTMLInputElement | null>(null)

    console.log("preview", preview)

    // Cleanup image review
    useEffect(() => {
        // Clean up the URL when the component unmounts or the image changes
        return () => {
            if (preview && preview !== "") URL.revokeObjectURL(preview);
        };
    }, [preview]);


    // Function to handle file selection and update the preview
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);  // Save the selected file
            const imageUrl = URL.createObjectURL(file);  // Generate preview URL
            setPreview(imageUrl);  // Update the preview image
        }
    };

    return (
        <div className=" relative overflow-hidden group">
            <Avatar src={avatar} size="lg" alt="avatar" />
            <Button isIconOnly radius="full" onPress={onOpen} className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 cursor-pointer  bg-gray-400/50 z-10 ">
                <AddAPhotoIcon />
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    body: "py-6",
                    // backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    // base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                    header: "border-b-[1px] border-gray-500]",
                    footer: "border-t-[1px] border-gray-500]",
                    closeButton: "hover:bg-white/5 active:bg-white/10",
                }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Cập nhật ảnh đại diện</ModalHeader>
                            <ModalBody>
                                {preview ? (
                                    <div className='flex justify-center items-center w-[400px] h-auto py-10 '>
                                        <Image
                                            src={preview} alt="avatar-preview"
                                            className="w-full h-auto rounded-none cursor-pointer "
                                            onClick={() => inputRef.current?.click()}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className='flex justify-center items-center cursor-pointer w-full min-h-80 border-3 border-dashed border-gray-300 rounded-2xl'
                                        onClick={() => inputRef.current?.click()}
                                    >
                                        Chọn hình ảnh
                                    </div>
                                )}

                                <Input ref={inputRef} type="file" onChange={handleFileChange} className="hidden" />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Đóng
                                </Button>
                                <Button color="danger" onPress={onClose}>
                                    Xóa Avatar
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Cập nhật
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default UploadAvatar