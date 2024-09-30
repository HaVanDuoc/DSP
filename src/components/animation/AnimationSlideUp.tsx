import { AnimatePresence, motion } from "framer-motion";

const AnimationSlideUp = ({
  isVisible = false,
  translateY = 50,
  duration = 0.2,
  keyEffect,
  children,
}: {
  isVisible: boolean;
  keyEffect: string;
  translateY?: number;
  duration?: number;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={keyEffect}
          initial={{ opacity: 0, y: translateY }} // Trạng thái ban đầu: Mờ và ở dưới
          animate={{ opacity: 1, y: 0 }} // Trạng thái khi hiển thị: Hiện rõ và trượt lên
          exit={{ opacity: 0, y: translateY }} // Trạng thái khi đóng: Mờ dần và trượt xuống
          transition={{ duration: duration }} // Thời gian chuyển đổi
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimationSlideUp;
