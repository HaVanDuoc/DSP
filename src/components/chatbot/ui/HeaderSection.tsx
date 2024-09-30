import { IoClose } from "react-icons/io5";
import AvatarBot from "../AvatarBot";
import AVATAR_BOT from "@/assets/img/bot/bot.jpg";
import AnimationHover from "@/components/animation/AnimationHover";

const HeaderSection = ({ onClose }: { onClose: () => void }) => (
  <section className="flex flex-row gap-5 items-center px-5 py-4 bg-gray-200 shadow-lg">
    <AvatarBot avatar={AVATAR_BOT.src} size={50} />
    <div className="flex flex-col flex-1 ">
      <div className="text-lg font-bold">ChatBot</div>
      <div className="text-sm opacity-70">Chào bạn! 👋 </div>
    </div>
    <AnimationHover>
      <IoClose
        size={26}
        className="opacity-70 cursor-pointer"
        onClick={onClose}
      />
    </AnimationHover>
  </section>
);

export default HeaderSection;
