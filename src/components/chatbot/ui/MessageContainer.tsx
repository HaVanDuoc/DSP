"use client";

import { ConversationProps } from "@/models/chatBox";
import MessageBubble from "../MessageBubble";
import { useEffect, useRef, useState } from "react";
import AnimationSlideUp from "@/components/animation/AnimationSlideUp";

const MessageContainer = ({
  messages,
  isComposing,
}: {
  messages: ConversationProps["messages"];
  isComposing: boolean;
}) => {
  // const [messages, setMessages] = useState<ConversationProps["messages"]>(
  //   conversation.messages
  // );
  const container = useRef<HTMLDivElement>(null);

  const autoScroll = () => {
    const { scrollHeight } = container.current as HTMLDivElement;
    container.current?.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    autoScroll();
  }, [messages, isComposing]);

  return (
    <div
      ref={container}
      className="flex flex-col gap-5 p-5 h-[60vh] overflow-y-auto container_messages"
    >
      {messages.map((message, index) => {
        const { id, content, sender, timestamp } = message;

        return (
          <div key={`message ${id}`}>
            <MessageBubble
              id={id}
              content={content}
              sender={sender}
              timestamp={timestamp}
            />
          </div>
        );
      })}

      <AnimationSlideUp
        isVisible={isComposing}
        keyEffect="effectComposingMessage"
      >
        <div className={`flex w-full justify-end`}>
          <div className={`flex flex-col gap-2 max-w-[80%]`}>
            <div
              className={`bg-main rounded-br-none px-5 pt-2 text-sm rounded-2xl shadow-sm text-black`}
            >
              <span className="loading loading-dots loading-m text-white"></span>
            </div>
          </div>
        </div>
      </AnimationSlideUp>
    </div>
  );
};

export default MessageContainer;
