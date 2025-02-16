import React, { useEffect, useRef, memo } from "react";
import { MarkdownRenderer } from "./ReactMarkdown";

interface ChatResponseProps {
  messages: { id: string; role: string; content: string }[];
}

const ChatResponse: React.FC<ChatResponseProps> = memo(({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
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
        <div ref={messagesEndRef} className="pb-[60px]" />
      </div>
    </div>
  );
});
ChatResponse.displayName = "ChatResponse";

export default ChatResponse;
