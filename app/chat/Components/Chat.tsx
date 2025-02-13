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
      <div className="flex flex-col  p-2 h-full w-full">
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />

        <ChatResponse messages={messages} />

        <ChatRequest
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
          isLoading={isLoading}
          stop={stop}
        />
      </div>
    );
  }
);
Chat.displayName = "Chat";

export default Chat;
