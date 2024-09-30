import React, { useState } from "react";
import { CONVERSATION } from "@/data/chatbox";
import HeaderSection from "./ui/HeaderSection";
import MessageContainer from "./ui/MessageContainer";
import FooterSection from "./ui/FooterSection";
import AnimationSlideUp from "../animation/AnimationSlideUp";
import { ConversationProps } from "@/models/chatBox";

const ChatBot = ({
  isOpenBot,
  onClose,
}: {
  isOpenBot: boolean;
  onClose: () => void;
}) => {
  const [isComposing, setComposing] = useState<boolean>(false); // composing message
  const [messages, setMessages] = useState<ConversationProps["messages"]>(
    CONVERSATION.messages
  );

  return (
    <section className="w-[350px] fixed right-[3%] bottom-7 z-[99] bg-white rounded-2xl overflow-hidden shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,rgba(14,30,37,0.32)_0px_2px_16px_0px]">
      <AnimationSlideUp
        isVisible={isOpenBot}
        translateY={100}
        duration={0.2}
        keyEffect="effectChatbot"
      >
        <HeaderSection onClose={onClose} />
        <MessageContainer
          messages={messages}
          isComposing={isComposing}
        />
        <FooterSection setComposing={setComposing} messages={messages} setMessages={setMessages} />
      </AnimationSlideUp>
    </section>
  );
};

export default ChatBot;
