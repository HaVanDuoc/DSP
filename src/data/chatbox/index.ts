import { ConversationProps } from "@/models/chatBox";

export const CONVERSATION: ConversationProps = {
    id: 1,
    messages: [
        {
            id: 1,
            sender: "bot",
            content: "Hello! 👋 How can I help you?",
            timestamp: "10:30 AM",
        },
        {
            id: 2,
            sender: "user",
            content: "Can you tell me about your services?",
            timestamp: "10:31 AM",
        },
        {
            id: 3,
            sender: "bot",
            content:
                "Sure! We offer a variety of services including web development, AI assistance, and more.",
            timestamp: "10:32 AM",
        },
        {
            id: 4,
            sender: "user",
            content: "That sounds great! How can I get started?",
            timestamp: "10:33 AM",
        },
        {
            id: 5,
            sender: "bot",
            content:
                "You can start by signing up on our website or contacting support for more details.",
            timestamp: "10:34 AM",
        },
    ],
};
