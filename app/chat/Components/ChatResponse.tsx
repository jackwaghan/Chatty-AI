import React, { useEffect, useRef } from "react";
import { MarkdownRenderer } from "./ReactMarkdown";

interface ChatResponseProps {
  messages: { id: string; role: string; content: string }[];
}

const ChatResponse: React.FC<ChatResponseProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (messages.length) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "user") {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages]);
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className="flex-1 flex items-center justify-center overflow-y-scroll bg-[#1A1C1E] rounded-tl-3xl rounded-tr-3xl">
      <div className="w-[330px] md:w-[700px] pt-5 flex mx-auto h-full flex-col gap-6 text-white/80">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`w-full flex text-pretty ${
              message.role === "user" ? "justify-end " : "justify-start"
            }`}
          >
            <div
              className={` ${
                message.role === "user"
                  ? " px-3 py-1.5 rounded-lg bg-black w-fit"
                  : "w-full"
              }`}
            >
              {message.role === "user" ? (
                <div>{message.content}</div>
              ) : (
                <MarkdownRenderer content={message.content} />
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} className="pt-[100%] md:pt-[20%]" />
      </div>
    </div>
  );
};

export default ChatResponse;
