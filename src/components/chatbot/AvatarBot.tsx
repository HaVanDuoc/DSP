import Image from "next/image";

const AvatarBot = ({
  avatar,
  size = 80,
}: {
  avatar: string;
  size?: number;
}) => (
  <div
    className="border-3 border-main rounded-full overflow-hidden"
    style={{ width: size, height: size }}
  >
    <Image
      src={avatar}
      width={size}
      height={size}
      alt="avatar bot"
      className="w-full h-full object-cover"
    />
  </div>
);

export default AvatarBot;
