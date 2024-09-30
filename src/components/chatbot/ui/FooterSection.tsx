"use client";

import { ConversationProps, IMessage } from "@/models/chatBox";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const classesInput = {
  input: ["bg-transparent", "outline-none"],
  inputWrapper: [
    "flex-1",
    "bg-transparent",
    "focus-within:!bg-transparent",
    "shadow-none",
  ],
  innerWrapper: ["bg-transparent", "!items-center"],
};

const FooterSection = ({
  setComposing,
  messages,
  setMessages,
}: {
  setComposing: (value: boolean) => void;
  messages: ConversationProps["messages"];
  setMessages: (newMessages: IMessage[]) => void;
}) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault(); // Prevent the default form submission behavior
    console.log("value", value);

    const newMessage: IMessage = {
      id: 1,
      sender: "user",
      content: value,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setValue(""); // Clear the input field after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t-1 border-gray-300 bg-white flex flex-row py-1 px-2 text-black"
    >
      <Textarea
        type="submit"
        value={value}
        placeholder="Tin nhắn..."
        minRows={1}
        maxRows={3}
        classNames={classesInput}
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
          if (value && value !== "") {
            setComposing(true);
          } else {
            setComposing(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(); // Call handleSubmit when Enter is pressed
          }
        }}
        endContent={
          <div
            className="flex justify-center items-center text-main cursor-pointer "
            onClick={() => {
              if (value && value !== "") {
                handleSubmit(); // Call handleSubmit when Enter is pressed
              }
            }}
          >
            <FaLocationArrow />
          </div>
        }
      />
    </form>
  );
};

export default FooterSection;
