import React from "react";
import { motion } from "framer-motion";

const AnimationShake = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
    animate={{ rotate: [0, 10, -10, 0] }} // Hiệu ứng rung
    transition={{
      rotate: {
        duration: 0.2, // Thời gian cho một chu kỳ rung
        repeat: Infinity, // Lặp vô hạn
        ease: "easeInOut",
      },
    }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationShake;
