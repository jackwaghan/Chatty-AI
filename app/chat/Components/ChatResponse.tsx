import React, { useEffect, useRef } from "react";
import { MarkdownRenderer } from "./ReactMarkdown";
import { useStore } from "@/lib/hooks";
import Loading from "./Loading";
import EmptyPage from "./EmptyPage";

interface ChatResponseProps {
  messages: { id: string; role: string; content: string }[];
  isLoading: boolean;
}

const ChatResponse: React.FC<ChatResponseProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { loading } = useStore();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [loading]);
  return (
    <div
      className={`"flex-1 h-full w-full overflow-hidden flex items-center justify-center  bg-[#1A1C1E] rounded-tr-3xl rounded-tl-3xl " ${!loading ? "overflow-y-scroll" : ""}`}
    >
      {!loading && messages.length > 0 ? (
        <div className="w-full p-4  md:w-[750px] pt-5 flex mx-auto h-full flex-col gap-6 text-white/80">
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
          {isLoading && (
            <div className="animate-pulse  text-white/40 ">
              <p>Thinking . . . </p>
            </div>
          )}
          <div ref={messagesEndRef} className="pb-5" />
        </div>
      ) : loading ? (
        <Loading />
      ) : (
        <EmptyPage />
      )}
    </div>
  );
};

export default ChatResponse;
