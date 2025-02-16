"use client";
import React, { memo } from "react";
import Header from "./Header";
import ChatResponse from "./ChatResponse";
import ChatRequest from "./ChatRequest";
import { useChat } from "@ai-sdk/react";
import { createIdGenerator } from "ai";
interface ChatProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  chatid: string;
  initialMessages: {
    id: string;
    role: "system" | "user" | "assistant" | "data";
    content: string;
  }[];
}
const Chat: React.FC<ChatProps> = memo(
  ({ setIsSidebarOpen, isSidebarOpen, initialMessages, chatid }) => {
    const [id, setId] = React.useState<string | undefined>(undefined);
    React.useEffect(() => {
      if (chatid) {
        setId(chatid);
      }
      const newId = createIdGenerator({ size: 16 })();
      setId(newId);
    }, [chatid]);
    const {
      handleInputChange,
      handleSubmit,
      isLoading,
      messages,
      input,
      stop,
    } = useChat({
      api: "/api/Gemini",
      initialMessages: initialMessages,
      id: id,
      generateId: createIdGenerator({
        prefix: "user",
        size: 16,
      }),
    });
    console.log(id);
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
