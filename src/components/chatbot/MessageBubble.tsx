import { IMessage } from "@/models/chatBox";
import AvatarBot from "./AvatarBot";
import AVATAR_BOT from "@/assets/img/bot/bot.jpg";

export const styleContentMessage =
  "text-sm p-3 rounded-2xl shadow-sm text-black";

const MessageBot: React.FC<IMessage> = ({ id, content, sender, timestamp }) => {
  return (
    <div className={`flex w-full justify-star`}>
      <div className={`flex flex-col gap-2 max-w-[80%]`}>
        <div className="flex flex-row  items-center gap-2">
          <AvatarBot avatar={AVATAR_BOT.src} size={24} />
          <div className="text-sm">ChatBot</div>
        </div>

        <div className={`bg-gray-200 rounded-tl-none ${styleContentMessage}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

const MessageUser: React.FC<IMessage> = ({
  id,
  content,
  sender,
  timestamp,
}) => {
  return (
    <div className={`flex w-full justify-end`}>
      <div className={`flex flex-col gap-2 max-w-[80%]`}>
        <div className={`bg-main rounded-br-none ${styleContentMessage}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

const MessageBubble: React.FC<IMessage> = ({
  id,
  content,
  sender,
  timestamp,
}) =>
  sender === "bot" ? (
    <MessageBot
      id={id}
      content={content}
      sender={sender}
      timestamp={timestamp}
    />
  ) : (
    <MessageUser
      id={id}
      content={content}
      sender={sender}
      timestamp={timestamp}
    />
  );

export default MessageBubble;
