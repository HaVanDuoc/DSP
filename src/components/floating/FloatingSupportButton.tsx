"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
import ChatBot from "@/components/chatbot";

const FloatingSupportButton = () => {
  const [isOpenBot, setOpenBot] = useState(false);

  return (
    <React.Fragment>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.2 }} // Phóng to khi hover
        whileTap={{ scale: 0.9 }} // Giảm kích thước khi nhấn
      >
        <Button
          isIconOnly
          className="cursor-pointer text-main border border-main bg-white rounded-full shadow-lg hover:bg-main hover:text-white"
          onClick={() => setOpenBot((prev) => !prev)} // Đảo trạng thái khi nhấn nút
        >
          <motion.div
            whileHover={{ rotate: 360 }} // Quay biểu tượng khi hover
            transition={{ duration: 0.5 }}
          >
            <BiSupport size={24} />
          </motion.div>
        </Button>
      </motion.div>

      {/* Hiển thị chatbot nếu isChatOpen là true */}
      <ChatBot isOpenBot={isOpenBot} onClose={() => setOpenBot(false)} />
    </React.Fragment>
  );
};

export default FloatingSupportButton;
