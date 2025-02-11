import React, { useEffect, useRef } from "react";

import { MarkdownRenderer } from "./ReactMarkdown";
interface ChatResponseProps {
  messages: { id: string; role: string; content: string }[];
}
const ChatResponse: React.FC<ChatResponseProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-full w-full ">
      <div className="w-[330px] md:w-[700px]  flex mx-auto h-full flex-col gap-12  text-white/80">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`w-full flex text-base text-pretty ${message.role === "user" ? "justify-end " : "justify-start"}`}
          >
            <div
              className={` ${message.role === "user" ? " px-3.5 py-1.5 rounded-lg bg-black w-fit" : "w-full"}`}
            >
              <MarkdownRenderer content={message.content} />
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} className="pt-20" />
      </div>
    </div>
  );
};

export default ChatResponse;
