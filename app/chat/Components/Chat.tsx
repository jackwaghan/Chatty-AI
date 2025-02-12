"use client";
import React, { memo } from "react";
import Header from "./Header";
import ChatResponse from "./ChatResponse";
import ChatRequest from "./ChatRequest";
import { useChat } from "@ai-sdk/react";
interface ChatProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}
const Chat: React.FC<ChatProps> = memo(
  ({ setIsSidebarOpen, isSidebarOpen }) => {
    const {
      handleInputChange,
      handleSubmit,
      isLoading,
      messages,
      input,
      stop,
    } = useChat({
      api: "/api/Gemini",
      sendExtraMessageFields: true,
    });
    return (
      <div className="flex flex-col h-full w-full p-2 ">
        {/* Sticky Header */}
        <div className="h-[55px] w-full sticky top-0  z-10">
          <Header
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>

        {/* Scrollable Chat Content */}
        <div className="flex-1 overflow-y-auto w-full bg-[#1A1C1E] rounded-tl-3xl rounded-tr-3xl">
          <div className="p-4 h-full w-full">
            <ChatResponse messages={messages} />
          </div>
        </div>

        {/* Sticky Chat Request (Input Section) */}
        <div className="h-[80px] mt-1 rounded-bl-3xl rounded-br-3xl bg-[#1A1C1E] sticky bottom-2 w-full">
          <ChatRequest
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            isLoading={isLoading}
            stop={stop}
          />
        </div>
      </div>
    );
  }
);
Chat.displayName = "Chat";

export default Chat;
