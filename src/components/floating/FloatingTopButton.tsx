"use client";

import { Button } from "@nextui-org/react";
import { TiArrowUpOutline } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FloatingTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Xử lý sự kiện cuộn để hiển thị hoặc ẩn nút
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 , }} // Bắt đầu với opacity 0 và trượt lên từ dưới
          animate={{ opacity: 1, y: 0 ,  }} // Khi xuất hiện, opacity tăng và di chuyển lên
          exit={{ opacity: 0, y: 50 }} // Khi biến mất, opacity giảm và trượt xuống
          transition={{ duration: 0.2, ease: "easeInOut" }} // Thời gian hiệu ứng
          whileHover={{ scale: 1.2 }} // Phóng to khi hover
        >
          <Button
            isIconOnly
            onPress={scrollToTop}
            className="cursor-pointer text-main border border-main bg-white hover:bg-main hover:text-white transition-all duration-200 ease-in-out rounded-full shadow-lg"
          >
            <TiArrowUpOutline size={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingTopButton;
