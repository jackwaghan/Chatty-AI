import React, { useEffect, useRef } from "react";
import { MarkdownRenderer } from "./ReactMarkdown";
import { useStore } from "@/lib/hooks";
import Loading from "./Loading";

interface ChatResponseProps {
  messages: { id: string; role: string; content: string }[];
}

const ChatResponse: React.FC<ChatResponseProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { loading } = useStore();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [loading]);
  return (
    <div
      className={`"flex-1 h-full w-full overflow-hidden flex items-center justify-center  bg-[#1A1C1E] rounded-tr-3xl rounded-tl-3xl " ${!loading ? "overflow-y-scroll" : ""}`}
    >
      {!loading ? (
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
                    ? " px-3 py-1.5 rounded-2xl bg-neutral-700 w-fit overflow-x-auto"
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
          <div ref={messagesEndRef} className="pb-5" />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ChatResponse;
