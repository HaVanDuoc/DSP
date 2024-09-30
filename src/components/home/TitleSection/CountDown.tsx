"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date; // Ngày kết thúc countdown
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    // Đảm bảo không có giá trị âm
    if (difference < 0) {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Dọn dẹp khi component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-row items-end gap-7 text-sm sm:text-base">
      <div>Kết thúc trong:</div>

      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-2xl sm:text-4xl text-secondary">
            <span
              style={{ "--value": timeLeft.days } as React.CSSProperties}
            ></span>
          </span>
          ngày
        </div>
        <div>
          <span className="countdown font-mono text-2xl sm:text-4xl text-secondary">
            <span
              style={{ "--value": timeLeft.hours } as React.CSSProperties}
            ></span>
          </span>
          giờ
        </div>
        <div>
          <span className="countdown font-mono text-2xl sm:text-4xl text-secondary">
            <span
              style={{ "--value": timeLeft.minutes } as React.CSSProperties}
            ></span>
          </span>
          phút
        </div>
        <div>
          <span className="countdown font-mono text-2xl sm:text-4xl text-secondary">
            <span
              style={{ "--value": timeLeft.seconds } as React.CSSProperties}
            ></span>
          </span>
          giây
        </div>
      </div>
    </div>
  );
};

export default Countdown;
