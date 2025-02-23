"use client";
import React from "react";
import Header from "./Header";
import ChatResponse from "./ChatResponse";
import ChatRequest from "./ChatRequest";
import { useChat } from "@ai-sdk/react";
import { createIdGenerator } from "ai";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { getUser } from "@/app/action";
import { User } from "@supabase/supabase-js";
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
const Chat: React.FC<ChatProps> = ({ initialMessages, chatid }) => {
  const [id, setId] = React.useState<string | undefined>(chatid);
  const [user, setUser] = React.useState<User | null>(null);
  const [Loading, setLoading] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (id === undefined) {
      const newId = uuidv4();
      setId(newId);
      localStorage.removeItem("chat");
    }
  }, [id, chatid]);
  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  const { handleInputChange, handleSubmit, isLoading, messages, input, stop } =
    useChat({
      api: "/api/Gemini",
      initialMessages: initialMessages,
      sendExtraMessageFields: true,
      generateId: createIdGenerator({
        prefix: "user",
        size: 16,
      }),
      onResponse: () => {
        setLoading(false);
      },
      onFinish: () => {
        router.push(`/chat/${id}`);
      },
    });

  return (
    <div className="flex flex-col p-2 h-full w-full">
      <Header />

      <ChatResponse messages={messages} isLoading={Loading} />

      <ChatRequest
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
        stop={stop}
        id={id}
        setLoading={setLoading}
        user={user}
      />
    </div>
  );
};

export default Chat;
