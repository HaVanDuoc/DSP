
export interface IMessage {
    id: number;
    sender: "bot" | "user";
    content: string;
    timestamp: string | Date;
}

export interface ConversationProps {
    id: number;
    messages: IMessage[];
}